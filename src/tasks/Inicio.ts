import { Page, expect, test } from "@playwright/test";
import { IdentificadoresUI } from "../userinterface/IdentificadoresUI";
import { Ingresa } from "../tasks/Ingresa";

export class Inicio {
    readonly page: Page;
    constructor(page: Page) { this.page = page }

    public static para(page: Page) {
        return new Inicio(page)
    }

    async paginaInicio() {
        await test.step("Abre el navegador e ingresa a la URL '" + process.env.URL + "'", async () => {
            await Ingresa.para(this.page).ingresaURL();
            await expect(this.page.locator(IdentificadoresUI.MODAL).first()).toBeVisible({ timeout: 30000 });
            await this.page.locator(IdentificadoresUI.X).click({button: 'left'});
        })
    }
    
}