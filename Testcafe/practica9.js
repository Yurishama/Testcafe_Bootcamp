import page from './pageModel';

fixture('Test con testcafe')
    .page('https://the-internet.herokuapp.com/');

test('Probar presionar teclas', async t =>{
    await t
        .click(page.link9)
    
    await t
        .pressKey('backspace')
        .wait(500)
    
    await t
        .pressKey('c')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: C')
        .expect(page.text91.innerText).notContains('53$%&/$%&$%&$%')

        .pressKey('tab')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: TAB')

        .pressKey('ENTER')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: ENTER')

        .pressKey('esc')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: ESC')

        .pressKey('capslock')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: CAPS_LOCK')

        .pressKey('space')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: SPACE')

        .pressKey('shift')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: SHIFT')

        .pressKey('up')
        .wait(500)
        .expect(page.text91.innerText).contains('You entered: UP')
});