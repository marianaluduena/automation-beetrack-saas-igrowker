import{Page, Locator} from "@playwright/test";

export default class Login {

    readonly page: Page;

    readonly loginBtn: Locator;

    constructor(page: Page){

        this.page = page;
        this.loginBtn = page.getByRole('button', { name: 'Iniciar sesión' });
    }
}