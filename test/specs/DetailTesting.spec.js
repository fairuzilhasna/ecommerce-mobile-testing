import { driver, expect } from '@wdio/globals'
import  scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobject/LoginPage.js'
import ProductsPage from '../pageobject/ProductsPage.js'
import DetailProductPage from '../pageobject/DetailProductPage.js'


describe ('Tes fitur halaman detail product', async () => {
    it('User memilih product Sauce Labs Backpack', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.loginButtonClick ()
        await ProductsPage.sauceLabsBackpackClick()  

        await expect (ProductsPage.sauceLabsBackpack) === (ProductsPage.sauceLabsBackpackDetail)
        await expect (DetailProductPage.sauceLabsBackpackPrice).toHaveText('$29.99')
    })

    it('User menekan tombol back to products', async () => {
        await DetailProductPage.backButtonClick()

        await expect (LoginPage.productPage).toBeDisplayed()
    })

    it('User menambahkan product ke keranjang', async () => {
        await ProductsPage.sauceLabsBackpackClick()
        await scrollScreen(1000, 500)
        await DetailProductPage.addToCartButtonProductClick()

        await expect (ProductsPage.cartIconText).toHaveText('1')
    })

    it('User menghapus product dari keranjang', async () => {
        await DetailProductPage.removeFromCartButtonProductClick() 

        await expect (DetailProductPage.addToCartButtonProduct).toHaveText('ADD TO CART')
    })

    it('User menekan tombol LinkedIn', async () => {
        await scrollScreen(1000, 500)
        await DetailProductPage.linkedInClick() 

    })
})