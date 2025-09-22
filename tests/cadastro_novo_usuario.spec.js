const { test, expect } = require('@playwright/test')

test('Realizar cadastro de novo usuário', async ({page}) => {

    // Acessar o Site
    await page.goto('/')
    await expect(page).toHaveURL('/') //Verifica se está na página raiz
    await expect(page.locator('.container h1')).toContainText('Welcome to the Simple Travel Agency!')
   
    // Selecionar página de Home
    await page.click('a[href="home"]')

    // Verifica se está na página de Login
    await expect(page).toHaveURL(/.*login/)
    await expect(page.locator('[class="panel-heading"]')).toHaveText('Login')

    //Selecionar página de Registro
    await page.click('text=Register')

    // Verifica se está na página de Registro
    await expect(page).toHaveURL(/.*register/)
    await expect(page.locator('[class="panel-heading"]')).toHaveText('Register')

    // Preencher os dados funcionais
    await page.fill('#name', 'Nome teste')
    await page.fill('#company', 'Iterasys FTS 145')
    await page.fill('#email', 'teste@teste.com')
    await page.fill('#password', 'senha123')
    await page.fill('#password-confirm', 'senha123')

    // Clicar em Registrar
    await page.click('.btn.btn-primary')

    // Verifica o Registro
    await expect(page).toHaveURL(/.*register/)
    await expect(page.locator('[class="message"]')).toHaveText('Page Expired')


})