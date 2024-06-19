class LoginPage {
    get inputUsername () { return $('~test-Username') }
    get inputPassword () { return $('~test-Password') }
    get loginButton () { return $('~test-LOGIN') }
    get productPage () { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup') }
    get errorMessage () { return $('//*[@content-desc="test-Error message"]/android.widget.TextView') }
    get standardUser () { return $('//*[@content-desc="test-standard_user"]') }
    get lockedOutUser () { return $('//*[@content-desc="test-locked_out_user"]') }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password)
    }
    async loginButtonClick () {
        await this.loginButton.click()
    }
    async standardUserButton () {
        await this.standardUser.click()
    }
    async lockedOutUserButton () {
        await this.lockedOutUser.click()
    }
}

export default new LoginPage