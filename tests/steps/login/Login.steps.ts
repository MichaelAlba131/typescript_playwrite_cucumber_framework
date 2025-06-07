import { Given, When } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/Hooks';
import { LoginInteractions } from '../../interactions/login/LoginInteractions';

Given('Eu abro a url', async function (this: CustomWorld) {
    if (!this.page) throw new Error('A página não foi inicializada.');
    this.loginInteraction = new LoginInteractions(this.page);
    await this.loginInteraction.openUrl();
});

When('Eu preencho o usuario {string} e a senha {string}', async function (this: CustomWorld, usuario: string, senha: string) {
    if (!this.loginInteraction) {
        throw new Error('loginInteraction não inicializado.');
    }
    await this.loginInteraction.fillUser(usuario);
    await this.loginInteraction.fillPassword(senha);
    await this.loginInteraction.clickAcessar();
});