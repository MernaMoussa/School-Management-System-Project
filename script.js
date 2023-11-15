import mainTemplate from './js/modules/main-template.js';

const acs = {};

acs.init = () => {
    const mainContainer = document.querySelector('.main-container');
    const templateData = {
        header: 'Header Content',
        contentLeft: 'Left Content',
        contentRight: 'Right Content',
        footer: 'Footer Content',
    };
    mainContainer.innerHTML = mainTemplate.render(templateData);
}

acs.init();