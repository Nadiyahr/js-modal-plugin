'use strict';
// const path = require('path');
// const notes = './static/collect.js';

// path.dirname(notes) // /users/joe
// path.basename(notes) // notes.txt
// path.extname(notes) // .txt


const plugin = document.getElementById('idward-plugin');
let isOpen = false;

if (plugin.getAttribute('isRunning') === 'true') {
  createButton();
  createModal();
}

function accept() {
  console.log('acc');
  // document.body.innerHTML = `<script src="./collect.js"></script>`;
  const script = document.createElement('script');
  script.src = './static/collect.js';
  document.body.appendChild(script);
  console.log('acc');

  toggleModal();
}

function toggleModal() {
  isOpen = !isOpen;

  const visibility = isOpen ? 'visible' : 'hidden';
  const overflow = isOpen ? 'hidden' : 'auto';

  document.getElementById('back').style.visibility = visibility;
  document.getElementById('mod').style.visibility = visibility;
  document.documentElement.style.overflow = overflow;
  document.getElementById('mySidebar').style.overflow = overflow;
}

function createModal() {
  const backdrop = document.createElement('div');

  backdrop.id = 'back';

  backdrop.style.cssText = `
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 5;
    visibility: hidden;
  `;

  const dialog = document.createElement('div');

  dialog.classList.add('modal');
  dialog.id = 'mod';

  dialog.innerHTML = `
    <div style="
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      display: flex;
      justify-content: space-around;
    ">
      <button class="w3-button w3-black" id="acc">Accept</button>
      <button class="w3-button w3-black" id="rej">Reject</button>
    </div>
  `;

  dialog.style.cssText = `
    resize: both;
    overflow: auto;
    min-width: 400px;
    min-height: 160px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    padding: 30px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    z-index: 6;
    visibility: hidden;
  `;

  document.body.appendChild(backdrop);
  backdrop.appendChild(dialog);

  const rejBtn = document.getElementById('rej');

  rejBtn.addEventListener('click', toggleModal);

  const accBtn = document.getElementById('acc');

  accBtn.addEventListener('click', accept);
}

function createButton() {
  const triangleBtn = document.createElement('triangleBtn');

  triangleBtn.onclick = toggleModal;

  triangleBtn.style.cssText = `
    border: none;
    background-color: transparent;
    border-left: 80px solid #0645ad;
    border-top: 80px solid transparent;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
    z-index: 5;
  `;

  document.body.appendChild(triangleBtn);
}
