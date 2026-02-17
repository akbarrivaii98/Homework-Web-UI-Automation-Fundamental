describe('homework Automation Sauce Demo', () => {
  it('Berhasil Login dan Sortir Produk A-Z', () => {
    // 1. Kunjungi website
    cy.visit('https://www.saucedemo.com/')

    // 2. Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Pastikan login berhasil (URL berubah)
    cy.url().should('include', '/inventory.html')

    // 3. Urutkan Produk dari A-Z
    cy.get('[data-test="product-sort-container"]').select('az')

    // Validasi: Cek apakah item pertama benar "Sauce Labs Backpack"
    cy.get('.inventory_item_name').first().should('have.text', 'Sauce Labs Backpack')
  })
})