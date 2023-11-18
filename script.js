import homeTemplate from "./js/templates/home-template.js";
import { templateId } from "./js/modules/home-module.js";
import classesTemplate from "./js/templates/classes-template.js"

const acs = {};
acs.init = () => {
    const app = document.getElementById('app');
    function loadContent(pTemplateId) {
        if (pTemplateId === "home") {
            app.innerHTML = homeTemplate;
        }
        if (pTemplateId === "classes") {
            app.innerHTML = classesTemplate;
        } else {
            app.innerHTML = '';
        }
    }
    loadContent("classes");
}

acs.init();