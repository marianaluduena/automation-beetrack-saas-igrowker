import{Page, Locator} from "@playwright/test";

export default class Register {

    readonly page: Page;

    readonly emailInput: Locator;
    readonly continueBtn: Locator;
    readonly messageAlert: Locator;

    constructor(page: Page){

        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'nombre@dominio.com' })
        this.continueBtn = page.getByRole('button', { name: 'Continuar' })
        this.messageAlert = page.getByText("Error comprobando el email. Por favor intentelo de nuevo");
    }
}