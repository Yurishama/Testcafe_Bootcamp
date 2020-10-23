import page from './pageModel';

fixture('Test con testcafe')
    .page ('https://formy-project.herokuapp.com/form');

test('Probando primer formulario', async t =>{
    await t
        .typeText(page.input71, "Saida", {speed:0.1})
        .expect(page.input71.value).eql("Saida")
        .typeText(page.input72,"Reyes")
        .expect(page.input72.value).eql("Reyes")
        .typeText(page.input73,"Software enginnerr in test")
        .expect(page.input73.value).eql("Software enginnerr in test")
        .click(page.rbtn74)
        .expect(page.rbtn74.checked).ok()
        .click(page.rbtn75)
        .click(page.rbtn76)
        .click(page.checkbox77)
        .click(page.checkbox78)
        .click(page.checkbox79)
        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703, "10222020")
        .click(page.btn704)

    await t
        .expect(page.text705.visible).ok()

});