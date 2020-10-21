import { assert } from 'console';
import { Selector } from 'testcafe';
import page from './pageModel';

fixture('Practica 2 con testcafe')
    .page('https://the-internet.herokuapp.com/');

const abText = Selector('h3')
test('Probar dar clic en un enlance', async t => {
    await t
        .click(page.link2)

    const abTextElement = await abText()
    console.log(abTextElement.innerText)

    if (abTextElement.innerText == "A/B Test Control" || abTextElement.innerText == "A/B Test Variation 1" || abTextElement.innerText == "A/B Test Variation" ){
        await t.expect(true).ok("Si pasa")
    } else {
        await t.expect(false).ok("No pasa")
    }

});
