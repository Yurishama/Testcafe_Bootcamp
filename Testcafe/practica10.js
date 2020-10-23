import page from './pageModel';
import { Selector } from 'testcafe'

//Primero hacer la prueba con 1 boton y luego con dos

fixture('Test con testcafe')
    .page ('https://the-internet.herokuapp.com/');


test('Probar un click derecho', async t => {
    await t
        .click(page.link10)
    
    await t

        .setNativeDialogHandler()
        .rightClick(page.hotspot101)

});