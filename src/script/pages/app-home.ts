import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {


  static get styles() {
    return css`
    `
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    console.log('Calculadora');
  }


  render() {
    return html`
      <app-header></app-header>
      <app-calculator></app-calculator>
      `
  }
}
