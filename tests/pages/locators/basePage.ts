// This is the main application's functions abstracted

import {Page, expect} from "@playwright/test"

// From the Home will be all the tests start

export class Home {

    protected readonly page: Page;

    constructor(page: Page) {

        this.page = page;
    }


}