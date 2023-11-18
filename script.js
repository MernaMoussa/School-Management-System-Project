import homeTemplate from "./js/templates/home-template.js";
import { templateId } from "./js/modules/home-module.js";


const acs = {};
acs.init = () => {
    const app = document.getElementById('app');
    function loadContent(pTemplateId) {
        if (pTemplateId === "home") {
            app.innerHTML = homeTemplate;
        }
        if (pTemplateId === "classes") {
            for (let index = 0; index < classes.length; index++) {
                app.innerHTML = classesTemplate;
            }
        } else {
            app.innerHTML = '';
        }
    }
    loadContent(templateId);
}

acs.init();