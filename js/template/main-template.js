export default function mainTemplate(data) {
    return `
      <div class="wrapper">
        <div class="header-logo">${data.header}</div>
        <div class="header-nav">${data.header}</div>
        <div class="header-login">${data.header}</div>
        <div class="content-left">${data.contentLeft}</div>
        <div class="content-right">${data.contentRight}</div>
        <div class="footer">${data.footer}</div>
      </div>
    `;
};