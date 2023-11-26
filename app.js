import headerTemplate from "./components/header/header.component.js";
import mainTemplate from "./components/main-template/main.component.js";
import contentTemplate from "./components/content/content.component.js";
import footerTemplate from "./components/footer/footer.component.js";

const app = {};

app.initialize = () => {
    mainTemplate.initialize();
    mainTemplate.addHeader(headerTemplate.render());
    mainTemplate.addContent(contentTemplate.render());
    mainTemplate.addFooter(footerTemplate.render())
}

document.addEventListener("DOMContentLoaded", () => {
    app.initialize();
});
