'use strict';

createButton();

function createButton() {
  let button = document.createElement('button');
  button.style.cssText = `
    border: none;
    background-color: transparent;
    border-left: 120px solid #000;
    border-top: 120px solid transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
  `;

  document.body.appendChild(button);
}

