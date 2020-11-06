/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';
import './my-element-child.js';

/**
 * An example element. Father component.
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60vw;
        padding: 16px;
        border-radius: 10px;
        height: 40vh;
      }
      input[type="text"] {
        width: 60%;
        border-radius: 20px;
        padding: 5px 15px;
        min-height: 25px;
        border: none;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
      }
      input:focus{
        outline: none;
      }
      .vowels {
        margin-bottom: 20px;
        display: flex;
      }
      .vowelsText {
        margin-top: 0;
        text-align: center;
        margin-right: 10px;
      }
      label {
        margin-right: 10px;
      }
      h1 {
        font-size: 36px;
        color: #fff;
        margin-bottom: 60px;
        font-family: 'Codystar', cursive;
        font-weight: bold;
        -webkit-animation: glow 2s ease-in-out infinite alternate;
        -moz-animation: glow 2s ease-in-out infinite alternate;
        animation: glow 2s ease-in-out infinite alternate;
      }

      @keyframes glow {
          from {
            color: #fff;
          text-shadow: 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 90px #00fff2;
        }
        
        to {
          color: gray;
          text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2, 0 1 90px #00fff2;
        }
      }
    `;
  }

  // Declare observed properties
  static get properties() {
    return {
      /**
       * The translation when input has text
       */
      translation: {type: String},
      /**
       * The selected vowel
       */
      selectedVowel: {type: String},
      /**
       * The list of vowels
       */
      vowels: {type: Array}
    };
  }

  constructor() {
    super();
    this.translation = '';
    this.selectedVowel = 'i';
    this.vowels = ['a', 'e', 'i', 'o', 'u'];
  }

  // Define the element's template
  render() {
    return html`
      <h1>- Traductor mimimi -</h1>
      <div class="vowels">
        <p class="vowelsText">Selecciona una vocal:</p>
        ${this.vowels.map((vowel) => {
          return html`
          <input type="radio" id="${vowel}" name="vowels" value="${vowel}" ?checked="${vowel === this.selectedVowel}" @click=${() => this._onClick(vowel)}>
          <label for="${vowel}">${vowel}</label>`
        })}
      </div>
      <input @keyup=${this._onChange} type="text" placeholder="Escribe un texto">
      <my-element-child .translation=${this.translation}></my-element-child>
    `;
  }

  _onClick(vowel) {
    this.selectedVowel = vowel;
    if (this.translation && this.translation.length) this.translation = this.translation.replace(/[aeiouáéíóú]/ig, this.selectedVowel);
  }

  _onChange(e) {
    this.translation = e.target.value.replace(/[aeiouáéíóú]/ig, this.selectedVowel);
  }
}

window.customElements.define('my-element', MyElement);
