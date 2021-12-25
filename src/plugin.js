'use strict';
const plugin = document.getElementById('idward-plugin');

if (plugin.getAttribute('isRunning') === 'true') {
  createButton();

  function createButton() {
    const button = document.createElement('button');
    button.onclick = openModal;
    button.style.cssText = `
      border: none;
      background-color: transparent;
      border-left: 100px solid #0645ad;
      border-top: 100px solid transparent;
      position: fixed;
      bottom: 0;
      left: 0;
      cursor: pointer;
      z-index: 5;
    `;

    document.body.appendChild(button);
  }
}

function openModal() {
  const dialog = document.createElement('div');
}

// const script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'collect.js';

// document.head.appendChild(script);

