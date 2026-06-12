/** @type {import('@lhci/cli').LighthouseCiConfig} */
module.exports = {
  ci: {
    collect: {
      // Start the Next.js production server after build
      startServerCommand: 'npx next start -p 4000',
      // Give the server time to boot
      startServerReadyPattern: 'started server on',
      // The URL(s) to audit
      url: ['http://localhost:4000'],
      // Number of runs per URL
      numberOfRuns: 1,
      // Collect all categories
      settings: {
        preset: 'desktop',
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'categories:performance': ['warn', { minScore: 0.6 }],
        'categories:accessibility': ['warn', { minScore: 0.8 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }],
      },
    },
    upload: {
      // Upload to temporary public storage (visible via LHCI dashboard link)
      target: 'temporary-public-storage',
    },
  },
};
