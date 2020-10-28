import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';

const getLocation = ClientFunction(() => document.location.href);

fixture('Test con testcafe')
    .page ('https://the-internet.herokuapp.com/upload');

test('Probando subir un archivo', async t =>{
    await t

    .expect(Selector('#file-upload').visible).ok()
    .setFilesToUpload(Selector('#file-upload'), './file.jpg')
    .click('#file-submit')

    await t
    .wait(1000)
    .expect(Selector('h3').innerText).contains('Uploaded')
    .expect(Selector('#uploaded-files').innerText).contains('file.jpg')
});



test('Probando Una URL', async t =>{
    await t
    .expect(getLocation()).contains('https://the-internet.herokuapp.com/upload');
});