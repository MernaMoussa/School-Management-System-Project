import mainTemplate from './main.template.js';

function initialize() {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = mainTemplate();
}

function addHeader(content) {
    getElement().innerHTML = content;
}

function getElement() {
    return document.querySelector('.header-section');
}
function addContent(content) {
    getContent().innerHTML = content;
}
function getContent() {
    return document.querySelector('.content-section');
}
function addFooter(content) {
    getFooter().innerHTML = content;
}
function getFooter() {
    return document.querySelector('.footer-section');
}

export default {
    initialize,
    addHeader,
    addContent,
    addFooter
}; 