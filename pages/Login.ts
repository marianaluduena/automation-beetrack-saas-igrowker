import{Page, Locator} from "@playwright/test";

export default class Login {

    readonly page: Page;
    readonly email: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;


    constructor(page: Page){

        this.page = page;
        this.email = page.getByRole('textbox', { name: 'Dirección de email' })
        this.password = page.getByRole('textbox', { name: 'Contraseña' })
        this.loginBtn = page.getByRole('button', { name: 'Iniciar sesión' });
    }

    async fillLoginForm(){

        await this.email.fill("marianabelenluduena@gmail.com");
        await this.password.fill("illusion-2");
        await this.loginBtn.click();

    }
}