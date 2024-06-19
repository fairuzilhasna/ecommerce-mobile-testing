import { driver, expect } from '@wdio/globals'
import  scrollScreen from '../../helpers/scrollScreen.js'
import LoginPage from '../pageobject/LoginPage.js'


describe ('Tes fitur login aplikasi ecommerce', async () => {
    it('login dengan username dan password yang benar', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.loginButtonClick ()
        await driver.pause(1000)
        await driver.back()

        await expect (LoginPage.productPage).toBeDisplayed()
    })

    it('login dengan menekan fitur autofill standard_user', async () => {
        await scrollScreen(1000, 100)
        await LoginPage.standardUserButton ()
        await scrollScreen(100, 1000)
        await LoginPage.loginButtonClick ()
        await driver.pause(1000)
        await driver.back()

        await expect (LoginPage.productPage).toBeDisplayed()
    })

    it('login dengan menekan fitur autofill locked_out_user', async () => {
        await scrollScreen(1000, 100)
        await LoginPage.lockedOutUserButton ()
        await scrollScreen(100, 1000)
        await LoginPage.loginButtonClick ()
        await driver.pause(3000)

        await expect(LoginPage.errorMessage).toHaveText('Sorry, this user has been locked out.')
    })

    it('login dengan username yang benar tetapi password salah', async () => {
        await LoginPage.login('standard_user', 'secret_random')
        await LoginPage.loginButtonClick ()
        await driver.pause(3000)

        await expect(LoginPage.errorMessage).toHaveText('Username and password do not match any user in this service.')
    })

    it('login dengan username dan password kosong', async () => {
        await LoginPage.login('', '')
        await LoginPage.loginButtonClick ()
        await driver.pause(3000)

        await expect(LoginPage.errorMessage).toHaveText('Username is required')
    })

    it('login dengan mengisi username yang benar tetapi password kosong', async () => {
        await LoginPage.login('standard_user', '')
        await LoginPage.loginButtonClick ()
        await driver.pause(3000)

        await expect(LoginPage.errorMessage).toHaveText('Password is required')
    })
})
