import { defineConfig } from '@playwright/test';

export default defineConfig({

    testDir : './tests',
    fullyParallel : true,
    workers : 1,
    reporter : 'html',

    use :
    {
        headless : false,
        screenshot : 'off',
        video : 'off',
        trace : 'off'
    },

    projects :
    [
        {
            name : 'chromium',
            use:
            {
                browserName: 'chromium'
            }
        },
        {
            name : 'firefox',
            use:
            {
                browserName: 'firefox'
            }
        },
        {
            name : 'webkit',
            use:
            {
                browserName: 'webkit'
            }
        }
    ]
});