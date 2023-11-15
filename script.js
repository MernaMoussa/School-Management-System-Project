import mainTemplate from './js/modules/main-template.js';

const acs = {};

acs.init = () => {
    const mainContainer = document.querySelector('.main-container');
    const templateData = {
        contentLeft: 'Left Content',
        contentRight: 'Right Content',
    };
    mainContainer.innerHTML = mainTemplate.render(templateData);
}

acs.init();