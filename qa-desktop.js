const { chromium } = require('playwright');
const path = require('path');

const pages = [
    { name: 'index', file: 'index.html' },
    { name: 'topic-list', file: 'topic-list.html' },
    { name: 'topic-detail', file: 'topic-detail.html' },
    { name: 'create-topic', file: 'create-topic.html' },
    { name: 'profile', file: 'profile.html' },
    { name: 'login', file: 'login.html' }
];

const viewports = [
    { width: 1366, height: 768, name: '1366x768' },
    { width: 1920, height: 1080, name: '1920x1080' }
];

async function captureScreenshots() {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const baseUrl = `file://${process.cwd()}`;

    console.log('Starting desktop QA screenshot capture...\n');

    for (const viewport of viewports) {
        console.log(`Testing at ${viewport.name}...`);
        
        const page = await context.newPage({
            viewport: { width: viewport.width, height: viewport.height }
        });

        for (const p of pages) {
            const url = `${baseUrl}/${p.file}`;
            const filename = `qa-desktop-${p.name}-${viewport.name}.png`;
            
            try {
                await page.goto(url, { waitUntil: 'networkidle' });
                await page.screenshot({ 
                    path: filename, 
                    fullPage: false 
                });
                console.log(`  ✓ Captured: ${filename}`);
            } catch (err) {
                console.error(`  ✗ Failed: ${p.name} - ${err.message}`);
            }
        }
        
        await page.close();
    }

    await browser.close();
    console.log('\nScreenshots captured successfully!');
}

captureScreenshots().catch(console.error);
