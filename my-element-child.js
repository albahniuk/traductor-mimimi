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

/**
 * An example element. Child component.
 */
export class MyElementChild extends LitElement {
    static get styles() {
      return css`
        :host {
          display: block;
          border: dashed 2px gray;
          margin-top: 20px;
          padding: 16px;
          width: 70%;
          border-radius: 10px;
          background-color: #eee;
          min-height: 50px;
          overflow: auto;
        }
      `;
    }
  
    static get properties() {
      return {
  
        /**
         * The translation when input has text
         */
        translation: {type: String},
      };
    }
  
    constructor() {
      super();
      this.translation = '';
    }
  
    render() {
      return html`
        <p>${this.translation}</p>
      `;
    }
  }

  window.customElements.define('my-element-child', MyElementChild);