describe('Task', () => {
    it('base example, is done', async () => {
        await page.setDefaultNavigationTimeout(0);
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolist-task--task-is-done-story&args=&viewMode=story');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
    it('base example, is not done', async () => {
        await page.setDefaultNavigationTimeout(0);
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolist-task--task-is-not-done-story&args=&viewMode=story');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
});
