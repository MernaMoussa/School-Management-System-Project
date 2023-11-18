import students from "../data/students-data.js";
function countStudents(pStudents) {
    return pStudents.length;
}
const countedStudents = countStudents(students);
const templateId = "home"
export { countedStudents, templateId };