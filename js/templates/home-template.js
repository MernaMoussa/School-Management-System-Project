import { countedStudents, countedTeachers, countedClasses } from "../modules/home-module.js";
function template(pCountedStudents, pCountedTeachers, pCountedClassses) {
  return `
  <div class="wrapper">
    <div class="left-content">
      <p>${pCountedStudents}</p>
      <p>number of students</p>
    </div>
    <div class="middle-content">
    <p>${pCountedTeachers}</p>
      <p>number of teachers</p>
    </div>
    <div class="right-content">
    <p>${pCountedClassses}</p>
      <p>number of students</p>
    </div>
  </div>
`;
}
const homeTemplate = template(countedStudents, countedTeachers, countedClasses);
export default homeTemplate