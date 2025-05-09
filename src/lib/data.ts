export const KNOWN_TRACKERS: Record<string, { name: string; category: string }> = {
  // Analytics
  'google-analytics.com': { name: 'Google Analytics', category: 'Analytics' },
  'hotjar.com': { name: 'Hotjar', category: 'Analytics' },
  'amplitude.com': { name: 'Amplitude', category: 'Analytics' },
  'mixpanel.com': { name: 'Mixpanel', category: 'Analytics' },
  'segment.io': { name: 'Segment', category: 'Customer Data Platform' },
  'newrelic.com': { name: 'New Relic', category: 'Performance Monitoring' },
  'chartbeat.com': { name: 'Chartbeat', category: 'Analytics' },
  'clicky.com': { name: 'Clicky', category: 'Analytics' },
  'statcounter.com': { name: 'StatCounter', category: 'Analytics' },

  // Advertising
  'doubleclick.net': { name: 'DoubleClick', category: 'Advertising' },
  'criteo.com': { name: 'Criteo', category: 'Advertising' },
  'adnxs.com': { name: 'AppNexus', category: 'Advertising' },
  'adsrvr.org': { name: 'The Trade Desk', category: 'Advertising' },
  'rubiconproject.com': { name: 'Rubicon Project', category: 'Advertising' },
  'openx.net': { name: 'OpenX', category: 'Advertising' },
  'advertising.com': { name: 'AOL Advertising', category: 'Advertising' },
  'yieldmo.com': { name: 'Yieldmo', category: 'Advertising' },
  'pubmatic.com': { name: 'PubMatic', category: 'Advertising' },

  // Tag Managers / A/B Testing
  'googletagmanager.com': { name: 'Google Tag Manager', category: 'Tag Management' },
  'optimizely.com': { name: 'Optimizely', category: 'A/B Testing' },
  'vwo.com': { name: 'VWO', category: 'A/B Testing' },

  // Social Media
  'facebook.net': { name: 'Facebook Pixel', category: 'Social Media' },
  'facebook.com': { name: 'Facebook', category: 'Social Media' },
  'twitter.com': { name: 'Twitter', category: 'Social Media' },
  'linkedin.com': { name: 'LinkedIn', category: 'Social Media' },
  'pinterest.com': { name: 'Pinterest', category: 'Social Media' },
  'snapchat.com': { name: 'Snapchat', category: 'Social Media' },

  // Session Recording / UX Tools
  'clarity.ms': { name: 'Microsoft Clarity', category: 'Session Recording' },
  'smartlook.com': { name: 'Smartlook', category: 'Session Recording' },
  'fullstory.com': { name: 'FullStory', category: 'Session Recording' },
  'mouseflow.com': { name: 'Mouseflow', category: 'Session Recording' },
};

export const FINGERPRINTING_PATTERNS = [
  'navigator.userAgent',
  'navigator.plugins',
  'navigator.mimeTypes',
  'navigator.language',
  'navigator.platform',
  'navigator.hardwareConcurrency',
  'navigator.deviceMemory',
  'screen.width',
  'screen.height',
  'screen.colorDepth',
  'canvas.toDataURL',
  'WebGLRenderingContext',
  'AudioContext',
  'webdriver',
  'getBattery',
  'getGamepads',
  'fonts',
  'fingerprint'
];
