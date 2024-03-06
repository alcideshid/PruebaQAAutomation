import { expect, test } from '@playwright/test';
import { Inicio } from '../src/tasks/Inicio';
import { IdentificadoresUI } from '../src/userinterface/IdentificadoresUI';
import { Constantes } from '../src/utils/Constantes';

//Author:Alcides Aguila

test.describe("Ingresa a la URL", () => {
  test.beforeEach(async ({ page }) => {
    await Inicio.para(page).paginaInicio();
  })

  test("Realiza proceso de login y logout", async ({ page }) => {
    await expect(page.locator(IdentificadoresUI.SIGN_IN).first()).toBeVisible({ timeout: 30000 });        //Valida que el localizador se encuentre visible
    await page.locator(IdentificadoresUI.SIGN_IN).click({button: 'left'});                                //Da clic en el elemento SIGN IN
    await page.locator(IdentificadoresUI.SIGN_IN2).click({button: 'left'});                               //Da clic en el elemento SIGN IN
    await expect(page.locator(IdentificadoresUI.TITULO_SIGN_IN).first()).toBeVisible({ timeout: 30000 }); //Valida que el localizador se encuentre visible
    let pass = await page.locator(IdentificadoresUI.USUARIO_L);          
    await pass.scrollIntoViewIfNeeded();                                                                  //Realiza un scroll hacia el elemento Password
    await page.locator(IdentificadoresUI.USUARIO_L).fill(Constantes.USUARIO);                             //Ingresa el valor del usuario
    await page.locator(IdentificadoresUI.PASSWORD_L).fill(Constantes.PASSWORD);                           //Ingresa el valor del password
    await page.locator(IdentificadoresUI.BOTON_SIGN_IN).click({button: 'left'});                          //Da clic en el elemento SIGN IN
    await expect(page.locator(IdentificadoresUI.AVATAR_ID)).toBeVisible({ timeout: 30000 });              //Valida que el localizador se encuentre visible
    await page.waitForTimeout(3000);
    await page.locator(IdentificadoresUI.AVATAR_ICONO).click({button: 'left'});                           //Da clic en el elemento Avatar
    await page.locator(IdentificadoresUI.BOTON_GOPROFILE).click({button: 'left'});                        //Da clic en el elemento GO PROFILE
    await expect(page.locator(IdentificadoresUI.TITULO_PERFIL)).toBeVisible({ timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.locator(IdentificadoresUI.ICONO_LOGOUT).click({button: 'left'});                           //Da clic en el elemento LOGOUT
    await expect(page.locator(IdentificadoresUI.SIGN_IN)).toBeVisible({ timeout: 30000 });                //Valida que el localizador se encuentre visible
  })


})
