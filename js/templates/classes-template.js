import classes from "../data/classes-data.js";
function template() {
    return classes.map(cls => `
        <div class="wrapper">
            <button type="button" id="edit"><i class="fa fa-regular fa-pen-to-square"></i></button>
            <button type="button" id="remove"><i class="fa fa-regular fa-circle-minus"></i></button>  
            <h2>${cls.name}</h2>
            <p>Teacher IDs: ${cls.teacherIds.join(', ')}</p>
            <p>Additional text</p>
            <button type="button" id="students">Students</button>
            <button type="button" id="teachers">Teachers</button>
        </div>
    `).join('');
}

const classesTemplate = template(classes);
export default classesTemplate