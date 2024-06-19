class DetailProductPage {
    get backButton () { return $('//android.widget.TextView[@text="BACK TO PRODUCTS"]') }
    get addToCartButtonProduct () { return $('//android.widget.TextView[@text="ADD TO CART"]') }
    get removeFromCartButtonProduct () { return $('//android.widget.TextView[@text="REMOVE"]') }
    get sauceLabsBackpackDetail () { return $('//android.widget.TextView[@text="Sauce Labs Backpack"]"]') }
    get sauceLabsBackpackPrice () { return $('//android.widget.TextView[@content-desc="test-Price"]') }
    get linkedIn () { return $('//android.widget.TextView[@text=""]') }

    async backButtonClick () {
        await this.backButton.click()
    }
    async addToCartButtonProductClick () {
        await this.addToCartButtonProduct.click()
    }
    async removeFromCartButtonProductClick () {
        await this.removeFromCartButtonProduct.click()
    }
    async linkedInClick () {
        await this.linkedIn.click()
    }
}

export default new DetailProductPage