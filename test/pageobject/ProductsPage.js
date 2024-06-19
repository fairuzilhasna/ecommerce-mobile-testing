class ProductsPage {
    get sidebar () { return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView') }
    get sidebarPage () { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup') }
    get closeSidebar () { return $('//android.view.ViewGroup[@content-desc="test-Close"]') }
    get cartIcon () { return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup') }
    get cartPage () { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup') }
    get modeIcon () { return $('//android.view.ViewGroup[@content-desc="test-Toggle"]') }
    get sortingButton () { return $('//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]') }
    get sortList () { return $('//android.widget.ScrollView[@content-desc="Selector container"]') }
    get sortAtoZ () { return $('//android.widget.TextView[@text="Name (A to Z)"]') }
    get sortZtoA () { return $('//android.widget.TextView[@text="Name (Z to A)"]') }
    get sortLowToHigh () { return $('//android.widget.TextView[@text="Price (low to high)"]') }
    get sortHighToLow () { return $('//android.widget.TextView[@text="Price (high to low)"]') }
    get cancelSort () { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup') }
    get sauceLabsBackpack () { return $('//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]') }
    get sauceLabsBackpackDetail () { return ('//android.widget.TextView[@text="Sauce Labs Backpack"]') }
    get p1AddToCart () { return $ ('(//android.widget.TextView[@text="ADD TO CART"])[1]') }
    get cartIconText () { return $('//android.widget.TextView[@text="1"]') }
    get p1RemoveFromCart () { return $ ('//android.view.ViewGroup[@content-desc="test-REMOVE"]') }

    async sidebarButton () {
        await this.sidebar.click()
    }
    async closeSidebarButton () {
        await this.closeSidebar.click()
    }
    async cartIconButton () {
        await this.cartIcon.click()
    }
    async modeIconButton () {
        await this.modeIcon.click()
    }
    async sortingButtonClick () {
        await this.sortingButton.click()
    }
    async sortAtoZButton () {
        await this.sortAtoZ.click()
    }
    async sortZtoAButton () {
        await this.sortZtoA.click()
    }
    async sortLowToHighButton () {
        await this.sortLowToHigh.click()
    }
    async sortHighToLowButton () {
        await this.sortHighToLow.click()
    }
    async cancelSortButton () {
        await this.cancelSort.click()
    }
    async sauceLabsBackpackClick () {
        await this.sauceLabsBackpack.click()
    }
    async p1AddToCartClick () {
        await this.p1AddToCart.click()
    }
    async p1RemoveFromCartClick () {
        await this.p1RemoveFromCart.click()
    }
}

export default new ProductsPage