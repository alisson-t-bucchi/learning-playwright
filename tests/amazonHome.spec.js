import {test, expect} from '@playwright/test'; 

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

test.use({ 
    locale: 'pt-BR',
    headless: false,
  });


test.beforeEach(async ({ page}) => {
    global.page = page
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test ('Validar tela Amazon', async() => {
    await test.step('Abrir pela principal da Amazon.com', async() => {
        await page.goto('https://www.amazon.com.br/'); 
        //await page.pause()
        
    })

    await test.step('Tela principal da amazon é apresentada', async () => {
        const currentUrl = page.url();
        expect(currentUrl).toBe('https://www.amazon.com.br/')
        await sleep(5000)
        
    })

    await test.step('Valido tela principal da amazon', async () => {
        await page.waitForSelector('#nav-logo-sprites');
        const logoElement = page.locator('#nav-logo-sprites');
        const searchInput = page.locator('#twotabsearchtextbox');
        const searchButton = page.locator('.nav-search-submit');
        
        await expect(logoElement).toBeVisible();
        await expect(searchInput).toBeVisible();
        await expect(searchButton).toBeVisible();
    })

    await test.step('clicar em Ofertas do dia', async() => {
        
        await page.locator('xpath=//*[@id="CardInstance6kXxyxc7sNoEQGC8Qj4WuQ"]/a/div[2]/span/span[2]').click();
        await sleep(5000)
    })

}); 

