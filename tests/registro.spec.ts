import { expect, test } from '@playwright/test';
import { Inicio } from '../src/tasks/Inicio';
import { IdentificadoresUI } from '../src/userinterface/IdentificadoresUI';
import { Constantes } from '../src/utils/Constantes';

//Author: Alcides Aguila

test.describe("Ingresa a la URL", () => {
  test.beforeEach(async ({ page }) => {
    await Inicio.para(page).paginaInicio();
  })

  //Paso previo
  //Función para generar texto aletorio, el cual nos servira para el correo
  function textoAleatorio(l)
  {
  var text = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(var i=0; i < l; i++ ){  
  text += char_list.charAt(Math.floor(Math.random() * char_list.length));}
  return text;
  }

  test("Realiza proceso de registro", async ({ page }) => {
    await expect(page.locator(IdentificadoresUI.SING_UP).first()).toBeVisible({ timeout: 30000 });        //Valida que el localizador se encuentre visible
    await page.locator(IdentificadoresUI.SING_UP).click({button: 'left'});                                //Da clic en el elemento SIGN UP
    await expect(page.locator(IdentificadoresUI.TITULO_SU).first()).toBeVisible({ timeout: 30000 });      //Valida que el localizador se encuentre visible
    await page.locator(IdentificadoresUI.EMAIL).fill(textoAleatorio(25)+'@gmail.com');                    //Ingresa el valor del correo
    await page.locator(IdentificadoresUI.TERMS).click({button: 'left'});                                  //Da clic en el radiobutton de Terminos y condiciones
    await page.locator(IdentificadoresUI.NO_BONUS).click({button: 'left'});                               //Da clic en el radiobutton No bonus
    let pass = await page.locator(IdentificadoresUI.PASSWORD);          
    await pass.scrollIntoViewIfNeeded();                                                                  //Realiza un scroll hacia el elemento Password
    await page.locator(IdentificadoresUI.PASSWORD).fill(Constantes.PASSWORD);                             //Ingresa el valor del password
    await page.locator(IdentificadoresUI.CONF_PASSWORD).fill(Constantes.PASSWORD);                        //Ingresa el valor del password
    await page.locator(IdentificadoresUI.SUBMIT).click({button: 'left'});                                 //Da clic en boton Submit            
    await expect(page.locator(IdentificadoresUI.CONGRATULATIONS)).toBeVisible({ timeout: 30000 });
    await page.waitForTimeout(3000);                                                                      //Se colocó pausa para que se pueda mostrar la pantalla
  })

})
