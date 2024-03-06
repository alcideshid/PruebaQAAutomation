import { PlaywrightTestConfig } from "@playwright/test"

const { devices } = require('@playwright/test')
const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 60000,
    retries: 0,
    workers: 1,

    use: {
        viewport: { width: 1440, height: 900},
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'on',
        video: {
            mode: 'on', 
          }
    },

    reporter: [
        ['list']
    ],

    projects: [
        {
            name: 'chromium',
            use: { 
                browserName: 'chromium',
                ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { 
                browserName: 'firefox',
                ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { 
                browserName: 'webkit',
                ...devices['Desktop Safari'] },
        }
    ]
}

export default config;