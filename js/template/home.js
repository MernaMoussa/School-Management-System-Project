const templateId = "page1"

function mainTemplate(data) {
    return `
        <div class="wrapper">
          <div class="left-content">${data.leftContent}</div>
          <div class="middle-content">${data.middleContent}</div>
          <div class="right-content">${data.rightContent}</div>
        </div>
      `;
};