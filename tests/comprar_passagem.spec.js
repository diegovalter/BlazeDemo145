const { test, expect } = require('@playwright/test')

test('Realizar compra de passagem', async ({page}) => {

    // Acessar o site
    await page.goto('/')
    await expect(page).toHaveURL('/') //Verifica se está na página raiz
    await expect(page.locator('.container h1')).toContainText('Welcome to the Simple Travel Agency!')
   
    // Selecionar origem e destino
    await page.selectOption('[name="fromPort"]', 'Boston')
    await page.selectOption('[name="toPort"]', 'London')
    // Clicar no botão para buscar voos
    await page.click('input[type="submit"]')

    // Verifica se está na página de seleção de voos
    await expect(page).toHaveURL(/.*reserve/)
    // Verifica Origem e destino
    await expect(page.locator('h3')).toHaveText('Flights from Boston to London:')
    // Selecionar o voo
    await page.getByRole('row', {name: /234 United/ }).getByRole('button').click()

    //Vericar se está na página de compra
    await expect(page).toHaveURL(/.*purchase/)
    //Verificar Companhia aérea e preço
    await expect(page.getByText('Airline: United')).toBeVisible()
    await expect(page.getByText('Total Cost: 914.76')).toBeVisible()

    //Preencher os dados funcionais
    await page.fill('#inputName', 'Nome teste')
    await page.fill('#address', 'Rua de teste, 01')
    await page.fill('#city', 'São Paulo')
    await page.fill('#state', 'São Paulo')
    await page.fill('#zipCode', '03000-000')
    await page.selectOption('#cardType', 'American Express')
    await page.fill('#creditCardNumber', '0000 111111 22222')
    await page.fill('#creditCardMonth', '12')
    await page.fill('#creditCardYear', '2026')
    await page.fill('#nameOnCard', 'Nome C Teste')
    // Clicar para avançar
    await page.click('input[type="submit"]')

    //Verificar pagina de confirmação da compra
    await expect(page).toHaveURL(/.*confirmation/)
    await expect(page.locator('h1')).toHaveText('Thank you for your purchase today!')

})