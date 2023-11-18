import { countStudents } from "../functions/home.js";
import students from "../data/students-data.js";

const numberOfStudents = countStudents(students);

const templateId = "page1";

function mainTemplate(pNumberOfStudents) {
  return `
        <div class="wrapper">
          <div class="left-content">
            <p>${pNumberOfStudents}</p>
            <p>number of students</p>
          </div>
          <div class="middle-content">
            <p>middle content</p>
          </div>
          <div class="right-content">
            <p>right content</p>
          </div>
        </div>
    `;
}

const generatedHTML = mainTemplate(numberOfStudents);

export { generatedHTML, templateId };