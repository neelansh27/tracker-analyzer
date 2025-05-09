export const KNOWN_TRACKERS: Record<string, { name: string; category: string }> = {
  'google-analytics.com': { name: 'Google Analytics', category: 'Analytics' },
  'googletagmanager.com': { name: 'Google Tag Manager', category: 'Tag Management' },
  'facebook.net': { name: 'Facebook Pixel', category: 'Social Media' },
  'facebook.com': { name: 'Facebook', category: 'Social Media' },
  'clarity.ms': { name: 'Microsoft Clarity', category: 'Analytics' },
  'twitter.com': { name: 'Twitter', category: 'Social Media' },
  'linkedin.com': { name: 'LinkedIn', category: 'Social Media' },
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
