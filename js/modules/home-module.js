import classes from "../data/classes-data.js";
import students from "../data/students-data.js";
import teachers from "../data/teachers-data.js"
const templateId = "home"
function countElements(elements) {
    return elements.length;
}
const countedStudents = countElements(students);
const countedTeachers = countElements(teachers);
const countedClasses = countElements(classes);
export { templateId, countedStudents, countedTeachers, countedClasses };