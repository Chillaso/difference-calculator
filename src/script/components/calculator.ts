import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('app-calculator')
export class AppCalculator extends LitElement {

  @property({type: Number, reflect: true})
  result = 0;
  @property({type: Number, reflect: true})
  firstNumber = 0;
  @property({type: Number, reflect: true})
  secondNumber = 0;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      /* Set class calculator to have two columns */
      .calculator {
        display: flex;
        witdh: 50%;
      }

      .number-input {
        display: grid;
        margin-right: 10px;
      }
      .number-input fluent-number-field {
        margin-bottom: 5px;
      }

      .actions fluent-button {
        display: grid;
        margin-bottom: 5px;
      }

      .result{
        display: none;
      }

      .result.show{
        display: flex;
      }

      .result-number{
        margin-left: 5px;
        color: chartreuse;
      }
    `;
  }

  changeFirstNumber(event: Event){
    const firstNumber: HTMLInputElement = event.target as HTMLInputElement
    this.firstNumber = +firstNumber.value
  }

  changeSecondNumber(event: Event){
    const secondNumber: HTMLInputElement = event.target as HTMLInputElement
    this.secondNumber = +secondNumber.value
  }

  porcentualChange() {
    const firstNumber: number = this.firstNumber
    const secondNumber: number = this.secondNumber
    var result: number = (firstNumber - secondNumber) / firstNumber * 100;
    this.result = +result.toFixed(2);
  }

  porcentualDifference(){
    const firstNumber: number = this.firstNumber
    const secondNumber: number = this.secondNumber
    var result: number = ((firstNumber - secondNumber) / ((firstNumber + secondNumber) / 2)) * 100;
    this.result = +result.toFixed(2);
  }

  render() {
    return html`
    <div class="calculator">
      <div class="number-input">
        <fluent-number-field id="firstNumber" value="" @input="${this.changeFirstNumber}"></fluent-number-field>
        <fluent-number-field id="secondNumber" value="" @input="${this.changeSecondNumber}"></fluent-number-field>
      </div>
      <div class="actions">
        <fluent-button appearance="accent" @click="${this.porcentualChange}">Calcular cambio porcentual</fluent-button>
        <fluent-button appearance="accent" @click="${this.porcentualDifference}">Calcular diferencia porcentual</fluent-button>
      </div>
    </div>
    <div class="result show">
      <p>La diferencia entre ${this.firstNumber} y ${this.secondNumber} es de <p class="result-number">${this.result}%<p></p>
    </div>
    `;
  }
}
