import students from "../data/students-data.js";
const templateId = "home"
function countStudents(pStudents) {
    return pStudents.length;
}
const countedStudents = countStudents(students);
export { countedStudents, templateId };