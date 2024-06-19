class CartPage {
    get continueButton () { return $('//android.widget.TextView[@text="CONTINUE SHOPPING"]') }
    get sauceLabBackpackCart () { return $('//android.widget.TextView[@text="Sauce Labs Backpack"]') }
    get checkoutButton () { return $('//android.widget.TextView[@text="CHECKOUT"]') }
    get checkoutInformation () { return $('//android.widget.ScrollView[@content-desc="test-Checkout: Your Info"]') }
    get removeButtonCart () { return $('//android.view.ViewGroup[@content-desc="test-REMOVE"]') }

    async continueButtonClick () {
        await this.continueButton.click()
    }
    async checkoutButtonClick () {
        await this.checkoutButton.click()
    }
    async removeButtonCartClick () {
        await this.removeButtonCart.click()
    }
}

export default new CartPage