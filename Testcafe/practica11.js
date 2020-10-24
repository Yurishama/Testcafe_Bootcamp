import page from './pageModel';


fixture('Test con testcafe')
    .page ('https://the-internet.herokuapp.com/');


test('Probar manejar un slider horizontal', async t => {
    await t
        .click(page.link11)
    
    await t
        .click(page.slider)
        .typeText(page.slider, "3.5",{speed:0.1})
        .expect(page.slider.value).eql('3.5')
});