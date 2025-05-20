import puppeteer, { Browser, Page } from "puppeteer";
import { FINGERPRINTING_PATTERNS, KNOWN_TRACKERS } from "./lib/data.js";
import { TrackerInfo } from "./lib/definitions.js";
export async function analyzer(url: string) {
    const requestUrl = new URL(url);
    const browser: Browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })

    const page = await browser.newPage();
    const thirdPartyRequests: Set<string> = new Set();
    const mainDomain = requestUrl.hostname;
    await page.setRequestInterception(true);
    
    page.on('request', request => {
      try {
        const currReqUrl = request.url();
        const currReqDomain = new URL(currReqUrl).hostname;
        
        // Capture third-party requests
        if (currReqDomain !== mainDomain && currReqDomain!== 'about:blank') {
          thirdPartyRequests.add(currReqDomain);
        }
        request.continue();
      } catch (error) {
        request.continue();
      }
    });
    await page.goto(url, { 
        waitUntil: 'networkidle2',
        timeout: 10000
    });
    // console.log(FINGERPRINTING_PATTERNS)
    console.log("Fingerprinting Patterns:",await fingerprintingPatterns(page));
    console.log("Third Party Trackers:",findTrackers(thirdPartyRequests).slice(0,10));
    browser.close();
}
async function fingerprintingPatterns(page: Page) :Promise<string[]> {
    const fpScripts: string[] = await page.evaluate((patterns)=> {
        // Getting all script tags
        const scripts: HTMLScriptElement[] = Array.from(document.getElementsByTagName("script"));
        const results:string[] = []
        scripts.forEach((s:HTMLScriptElement, index) => {
            for (const pattern of patterns) {
                // checking each script
                if (s.innerText.includes(pattern)) {
                    results.push(`${s.src || `Inline Script ${index+1}`} (contains ${pattern})`);
                }
            } 
        });
        return results
    }, FINGERPRINTING_PATTERNS)

    return fpScripts;
}
function findTrackers(thirdPartyRequests: Set<string>) :TrackerInfo[] {
    const trackers: TrackerInfo[] = [];
    thirdPartyRequests.forEach((domain:string)=> {
        let trackerFound:boolean = false;
        for (const [trackerDomain, trackerInfo] of Object.entries(KNOWN_TRACKERS)) {
            if (domain.includes(trackerDomain)) {
                trackers.push({
                    domain: trackerInfo.name,
                    url: trackerDomain,
                    type: 'third-party',
                    category: trackerInfo.category,
                })
                trackerFound=true;
                break;
            }
        }
        if (!trackerFound) {
            trackers.push({
                domain: domain,
                url: domain,
                type: 'third-party',
                category: "Unknown"
            })
        }
    })
    return trackers;
}
