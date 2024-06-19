import { driver, expect } from '@wdio/globals'
import LoginPage from '../pageobject/LoginPage.js'
import ProductsPage from '../pageobject/ProductsPage.js'
import { isAscending, isDescending, isHighToLow, isLowToHigh } from '../../helpers/ProductSorting.js'


describe ('Tes fitur halaman products aplikasi ecommerce', async () => {
    it('User membuka sidebar', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.loginButtonClick ()
        await driver.pause(1000)
        await ProductsPage.sidebarButton ()

        await expect (ProductsPage.sidebarPage).toBeDisplayed()
    })

    it('User menutup sidebar', async () => {
        await ProductsPage.closeSidebarButton ()

        await expect (ProductsPage.sidebarPage).not.toBeDisplayed()
    })

    it('User menekan icon keranjang', async () => {
        await ProductsPage.cartIconButton ()
        await driver.back()

        await expect (ProductsPage.cartPage).toBeDisplayed()
    })

    it('User menekan icon mode tampilan', async () => {
        await ProductsPage.modeIconButton()
    })

    it('User menekan icon mode tampilan', async () => {
        await ProductsPage.modeIconButton()
    })

    it('User menekan icon sorting A to Z', async () => {
        await ProductsPage.sortingButtonClick()
        await ProductsPage.sortAtoZButton()

        const allProductNameElement = await $$('//android.widget.ScrollView[@content-desc="test-PRODUCTS"]')

        const allProductNameText = []

        for (const productName of allProductNameElement) {
            const productNameText = await productName.getText()
            allProductNameText.push(productNameText)
        }

        console.log(allProductNameText)

        const isProductSortedAsc = isAscending(allProductNameText)

        await expect (isProductSortedAsc).toBe(true)
    })

    it('User menekan icon sorting Z to A', async () => {
        await ProductsPage.sortingButtonClick()
        await ProductsPage.sortZtoAButton()

        const allProductNameElement = await $$('//android.widget.ScrollView[@content-desc="test-PRODUCTS"]')

        const allProductNameText = []

        for (const productName of allProductNameElement) {
            const productNameText = await productName.getText()
            allProductNameText.push(productNameText)
        }

        console.log(allProductNameText)

        const isProductSortedDesc = isDescending(allProductNameText)

        await expect (isProductSortedDesc).toBe(true)
    })

    it('User menekan icon sorting price low to high', async () => {
        await ProductsPage.sortingButtonClick()
        await ProductsPage.sortLowToHighButton()

        const allProductPriceElement = await $$('//android.widget.ScrollView[@content-desc="test-PRODUCTS"]')

        const allProductPriceNumber = []

        for (const productPrice of allProductPriceElement) {
            const productPriceNumber = await productPrice.getElementValue()
            allProductPriceNumber.push(productPriceNumber)
        }

        console.log(allProductPriceNumber)

        const isProductSortedLowtoHigh = isLowToHigh(allProductPriceNumber)

        await expect (isProductSortedLowtoHigh).toBe(true)
    })
    
    it('User menekan icon sorting price high to low', async () => {
        await ProductsPage.sortingButtonClick()
        await ProductsPage.sortHighToLowButton()

        const allProductPriceElement = await $$('//android.widget.ScrollView[@content-desc="test-PRODUCTS"]')

        const allProductPriceNumber = []

        for (const productPrice of allProductPriceElement) {
            const productPriceNumber = await productPrice.getElementValue()
            allProductPriceNumber.push(productPriceNumber)
        }

        console.log(allProductPriceNumber)

        const isProductSortedHightoLow = isHighToLow(allProductPriceNumber)

        await expect (isProductSortedHightoLow).toBe(true)
    })

    it('User menekan icon sorting kemudian menekan tombol cancel pada list sorting', async () => {
        await ProductsPage.sortingButtonClick()
        await ProductsPage.sortAtoZButton()
        await ProductsPage.cancelSortButton()

        await expect (ProductsPage.sortList).not.toBeDisplayed()
    })

    it('User menekan tombol sauce labs backpack', async () => {
        await ProductsPage.sauceLabsBackpackClick()
        await driver.back()

        await expect (ProductsPage.cartPage).toBeDisplayed()
        await expect (ProductsPage.sauceLabsBackpackClick) === (ProductsPage.sauceLabsBackpackDetail)
    })

    it('User menekan tombol add to cart pada product Sauce Labs Backpack', async () => {
        await ProductsPage.p1AddToCartClick()

        await expect (ProductsPage.cartIconText).toHaveText('1')
    })

    it('User menekan tombol removed pada product Sauce Labs Backpack', async () => {
        await ProductsPage.p1RemoveFromCartClick()

        await expect (ProductsPage.p1AddToCart).toHaveText('ADD TO CART')
    })
})