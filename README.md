# ID-WARD test. plugin.js file only.

## Demo
- [GH Pages](https://Nadiyahr.github.io/ID-Ward/)

## Features

- Dev server(parcel)
- LintHTML
- StyleLint
- ESLint
- pre-commit hook(husky)
- deploy script(gh-pages)

## Description

All the functionality are implemented inside the plugin.js file. I have not modified index.html, and collect.js
The task:
- If the script's "isRunning" attribute value equals "false" (isRunning="false") the script
should not do anything. Otherwise, it should implement the following functionality:
- Add the triangle button in the bottom-left corner of the page (see image below). The
triangle should be always visible and always located in the bottom-left corner of the
web page.
- Clicking at the triangle should toggle the modal dialog
- The modal dialog should be a simple box with two buttons: "Accept" and "Reject". It
should be shown over the website and should be responsive to resizing.
- Block scrolling and click interactions on the website while the modal is shown.
- Clicking the Reject button should close the modal and unblock the website (allow the
user the scroll and interact with the site)
- Clicking the Accept button should do the same as clicking "Reject", but also
dynamically add the collect.js script to the HTML page

## Local development

1. Clone repo
2. npm i
3. npm start
4. npm run deploy when ready
