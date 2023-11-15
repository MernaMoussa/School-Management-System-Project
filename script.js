const app = document.getElementById('app');

function loadContent(page) {
    const templateId = `${page}-template`;
    const template = document.getElementById(templateId);

    if (template) {
        app.innerHTML = template.innerHTML;
    } else {
        app.innerHTML = '<h2>Page Not Found</h2>';
    }
}