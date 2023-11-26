import classes from "../school-data/classes-data.js";
function template(pClasses) {
    return pClasses.map(pClass => `
        <div class="wrapper">
            <button type="button" id="edit"><i class="fa fa-regular fa-pen-to-square"></i></button>
            <button type="button" id="remove"><i class="fa fa-regular fa-circle-minus"></i></button>  
            <h2>${pClass.name}</h2>
            <p>Teacher IDs: ${pClass.teacherIds.join(', ')}</p>
            <p>Additional text</p>
            <button type="button" id="students">Students</button>
            <button type="button" id="teachers">Teachers</button>
        </div>
    `).join('');
}

const classesTemplate = template(classes);
export default classesTemplate