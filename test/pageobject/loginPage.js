class loginPage {
    get username () { return $('~test-Username') }
    get password () { return $('~test-Password') }
    get login () { return $('~test-LOGIN') }
    get productPage () { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup') }
    get errorMessage () { return $('//*[@content-desc="test-Error message"]/android.widget.TextView') }
    get standardUser () { return $('//*[@content-desc="test-standard_user"]') }
    get lockedOutUser () { return $('//*[@content-desc="test-locked_out_user"]') }

    async usernameInput () {
        await this.username.setValue('standard_user')
    }
    async passwordInput () {
        await this.password.setValue('secret_sauce')
    }
    async loginButton () {
        await this.login.click()
    }
    async standardUserButton () {
        await this.standardUser.click()
    }
    async lockedOutUserButton () {
        await this.lockedOutUser.click()
    }
}

export default loginPage