export default function mainTemplate(data) {
  return `
      <div class="wrapper">
        <div class="content-left">${data.contentLeft}</div>
        <div class="content-right">${data.contentRight}</div>
      </div>
    `;
};