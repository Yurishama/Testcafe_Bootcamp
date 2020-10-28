import page from './PageObjectModel';
import {data} from './data.js';

fixture('Pruebas de modulo mi cuenta')
    .page ('http://automationpractice.com');

test('Crear una cuenta', async t => {
    await t
    .click(page.signIn_link)
    console.log("Correo: ", data.email)
    console.log("Correo: ", data.firstName)
    console.log("Correo: ", data.password)
    
    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastName)

        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)

        .typeText(page.password_input, data.password)
        .typeText(page.address, "PO Box 7687")

       

});

test('Loogearse con una cuenta nueva', async t => {});
test('Logout', async t => {});
test('Crear una cuenta con un correo ya existente', async t => {});
test('Validar recuperar el password con un correo valido', async t => {});
test('Valiadr recuperar password con un correo no valido', async t => {});
test('Cambiar información de mi cuenta', async t => {});
