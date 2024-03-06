import { Page, test } from "@playwright/test";

test.use({viewport: { width: 1440, height: 900}});

export class Ingresa {
    readonly page: Page;
    constructor(page: Page) { this.page = page }

    public static para(page: Page) {
        return new Ingresa(page) 
    }

    async ingresaURL(){
        await test.step("Ingresa a la URL", async () => {
            let BASE_URL: string = process.env.URL!;
            await this.page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 120000 });
        })
    }     

}