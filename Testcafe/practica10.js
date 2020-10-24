import page from './pageModel';


fixture('Test con testcafe')
    .page ('https://the-internet.herokuapp.com/');


test('Probar un click derecho', async t => {
    await t
        .click(page.link10)
    
    await t

        .setNativeDialogHandler(() => true)
        .rightClick(page.hotspot101)

        const history = await t.getNativeDialogHistory();

        console.log(history)

    await t
        .wait(200)
        .expect(history[0].type).eql('alert')
        .expect(history[0].text).eql('You selected a context menu')
        .expect(history[0].url).eql('https://the-internet.herokuapp.com/context_menu')
});