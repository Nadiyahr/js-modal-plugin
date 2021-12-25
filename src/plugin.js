'use strict';

const plugin = document.getElementById('idward-plugin');

if (plugin.getAttribute('isRunning') === 'true') {
  createButton();
}

function reject() {
  reloadScrollBars();
  console.log('reject');
  document.getElementById('id01').style.display='none';
}

function accept() {
  reloadScrollBars();
  console.log('accept');
  document.getElementById('id01').style.display='none';
}

function reloadScrollBars() {
  document.documentElement.style.overflow = 'auto';
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden';
}

function openModal() {
  const dialog = document.createElement('div');
  dialog.classList.add('w3-modal');
  dialog.id = 'id01';
  dialog.style.cssText = `display: block;`;
  dialog.innerHTML = `
    <div class="w3-modal-content">
      <div class="w3-container">
        <div class="w3-card" style="
          padding: 30px;
          display: flex;
          justify-content: space-around;
        ">
          <button class="w3-button w3-teal" id="acc">Accept</button>
          <button class="w3-button w3-red" id="rej">Reject</button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(dialog);
  unloadScrollBars();

  const rejBtn = document.getElementById('rej');
  rejBtn.addEventListener('click', reject);
  const accBtn = document.getElementById('acc');
  accBtn.addEventListener('click', accept);
  console.log(dialog);
}

function createButton() {
  const triangleBtn = document.createElement('triangleBtn');

  triangleBtn.onclick = openModal;

  triangleBtn.style.cssText = `
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

  document.body.appendChild(triangleBtn);
}

// const script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'collect.js';

// document.head.appendChild(script);
