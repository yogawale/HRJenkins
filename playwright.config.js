import { chromium, defineConfig } from '@playwright/test';

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
            browser : chromium,
            use:
            {
                browserName: 'chromium'
            }
        }
    ]

});