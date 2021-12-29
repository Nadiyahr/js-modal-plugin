'use strict';

const plugin = document.getElementById('idward-plugin');
let freezeClic = false;

if (plugin.getAttribute('isRunning') === 'true') {
  createButton();
  createModal();
}

function reject() {
  reloadScrollBars();
  console.log('reject');
  document.getElementById('mod01').style.visibility = 'hidden';
  document.getElementById('bckd').style.visibility = 'hidden';
}

function accept() {
  // const script = document.createElement('script');
  // script.type = 'text/javascript';
  // script.src = './collect.js';
  // script.setAttribute('src', 'collect.js')

  // document.body.appendChild(script);
  // console.log(script);
  reloadScrollBars();
  console.log('accept');
  document.getElementById('mod01').style.visibility = 'hidden';
  document.getElementById('bckd').style.visibility = 'hidden';
}

function reloadScrollBars() {
  document.documentElement.style.overflow = 'auto';
  document.getElementById('mySidebar').style.overflow = 'auto';
  document.getElementById('mySidebar').style.pointerEvents = 'auto';
  freezeClic = !freezeClic;
}

function unloadScrollBars() {
  document.documentElement.style.overflow = 'hidden';
  document.getElementById('mySidebar').style.overflow = 'hidden';
  document.getElementById('mySidebar').style.pointerEvents = 'none';
  freezeClic = !freezeClic;
}

function openModal() {
  document.getElementById('bckd').style.visibility = 'visible';
  document.getElementById('mod01').style.visibility = 'visible';
  unloadScrollBars();
}

function createModal() {
  const backdrop = document.createElement('div');
  backdrop.id = 'bckd';
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
  dialog.id = 'mod01';
  dialog.innerHTML = `
    <button class="w3-button w3-teal" id="acc">Accept</button>
    <button class="w3-button w3-red" id="rej">Reject</button>
  `;
  dialog.style.cssText = `
    visibility: hidden;
    position: fixed;
    position: absolut;
    z-index: 6;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    heigth: 200px;
    overflow: auto;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    border: 1px solid #999;
    border: 1px solid rgba(0, 0, 0, 0.3);
    *border: 1px solid #999;
    -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
  `;

  document.body.appendChild(backdrop);
  backdrop.appendChild(dialog);


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
