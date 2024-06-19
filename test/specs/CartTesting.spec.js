import { driver, expect } from '@wdio/globals'
import  scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobject/LoginPage.js'
import ProductsPage from '../pageobject/ProductsPage.js'
import { isAscending, isDescending, isHighToLow, isLowToHigh } from '../../helpers/ProductSorting.js'
import DetailProductPage from '../pageobject/DetailProductPage.js'
import CartPage from '../pageobject/CartPage.js'

describe ('Tes fitur halaman keranjang', async () => {
    it('User menekan tombol continue shopping pada halaman cart', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.loginButtonClick ()
        await ProductsPage.cartIconButton ()
        await CartPage.continueButtonClick()

        await expect (LoginPage.productPage).toBeDisplayed()
    })

    it('User memasukkan product ke keranjang', async () => {
        await ProductsPage.p1AddToCartClick()
        await ProductsPage.cartIconButton ()

        await expect (ProductsPage.sauceLabsBackpackClick) === (CartPage.sauceLabBackpackCart)
    })

    it('User menekan tombol checkout pada halaman cart', async () => {
        await scrollScreen (1000, 550)
        await CartPage.checkoutButtonClick()

        await expect (CartPage.checkoutInformation).toBeDisplayed()
    })

    it('User menekan tombol remove pada halaman cart', async () => {
        await driver.back()
        await scrollScreen (500, 1000)
        await CartPage.removeButtonCartClick()

        await expect (CartPage.sauceLabBackpackCart).not.toBeDisplayed()
    })
})