import { generatedHTML, templateId } from "./js/template/home.js";

const app = document.getElementById('app');
function loadContent(template) {
    if (template === "page1") {
        return generatedHTML;
    } else {
        return '';
    }
}

app.innerHTML = loadContent(templateId);