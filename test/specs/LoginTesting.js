import { $, driver, expect } from '@wdio/globals'
import  scrollScreen from '../../helpers/scrollScreen.js'
import loginPage from '../pageobject/loginPage.js'

describe ('Tes aplikasi ecommerce', async () => {
    it.only('login dengan username dan password yang benar', async () => {
        await loginPage.usernameInput()
        await loginPage.passwordInput()
        await loginPage.loginButton()

        await driver.pause(3000)

        await driver.back()

        await expect (Loginpage.productPage).toBeDisplayed()
    })

    it('login dengan menekan fitur autofill standard_user', async () => {
        const standardUserButton = await $('//*[@content-desc="test-standard_user"]')
        const loginButton =await $('~test-LOGIN')
        const productPage = await $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup')

        await scrollScreen(1000, 100)
        await standardUserButton.click()
        await scrollScreen(100, 1000)
        await loginButton.click()

        await driver.pause(3000)

        await driver.back()

        await expect (productPage).toBeDisplayed()
    })


    it('login dengan menekan fitur autofill locked_out_user', async () => {
        const lockedOutUserButton = await $('//*[@content-desc="test-locked_out_user"]')
        const loginButton =await $('~test-LOGIN')
        const errorMessage =await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

        await scrollScreen(1000, 100)
        await lockedOutUserButton.click()
        await scrollScreen(100, 1000)
        await loginButton.click()

        await driver.pause(3000)

        await expect(errorMessage).toHaveText('Sorry, this user has been locked out.')
    })

    it('login dengan username yang benar tetapi password salah', async () => {
        const usernameInput =await $('~test-Username')
        const passwordInput =await $('~test-Password')
        const loginButton =await $('~test-LOGIN')
        const errorMessage =await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('secret_random')
        await loginButton.click()

        await driver.pause(3000)

        await expect(errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('login dengan username dan password kosong', async () => {
        const usernameInput =await $('~test-Username')
        const passwordInput =await $('~test-Password')
        const loginButton =await $('~test-LOGIN')
        const errorMessage =await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

        await usernameInput.setValue('')
        await passwordInput.setValue('')
        await loginButton.click()
        await driver.pause(3000)

        await expect(errorMessage).toHaveText('Username is required')
    })

    it('login dengan mengisi username yang benar tetapi password kosong', async () => {
        const usernameInput =await $('~test-Username')
        const passwordInput =await $('~test-Password')
        const loginButton =await $('~test-LOGIN')
        const errorMessage =await $('//*[@content-desc="test-Error message"]/android.widget.TextView')

        await usernameInput.setValue('standard_user')
        await passwordInput.setValue('')
        await loginButton.click()
        await driver.pause(3000)

        await expect(errorMessage).toHaveText('Password is required')
    })
})