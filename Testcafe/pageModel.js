import { Selector } from 'testcafe';

class Page {
    constructor () {
    // Practica 2
    this.link2 = Selector('a').withText('A/B Testing');
    this.text21 = Selector ('#content > div > h3');

    // Practica 3
    this.link3 = Selector('a').withText('Forgot Password');
    this.input31 = Selector('#email'); 
    this.button32 = Selector('#form_submit');
    this.text33 = Selector('#content');

    // Practica 4
    this.link4 = Selector('a').withText('Checkboxes');
    //Checkbox Padre
    this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]')

    //Checboxs Hijos
    //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
    this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');
    }
}
export default new Page();