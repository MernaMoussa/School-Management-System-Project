import homeTemplate from "./js/templates/home-template.js";
import { templateId } from "./js/modules/home-module.js";


const acs = {};
acs.init = () => {
    const app = document.getElementById('app');
    function loadContent(pTemplateId) {
        console.log(pTemplateId)
        if (pTemplateId === "home") {
            app.innerHTML = homeTemplate;
        } else {
            app.innerHTML = '';
        }
    }
    loadContent(templateId);
}

acs.init();