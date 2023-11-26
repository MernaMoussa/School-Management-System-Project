import classes from "../school-data/classes-data.js";

function template(pClasses) {
    return pClasses.map(pClass => `
    <div class="wrapper col-4 d-inline-block text-center m-2 p-3 border">
    <div class="d-flex justify-content-end">
      <button type="button" id="edit" class="btn btn-primary m-1"><i class="bi bi-pencil"></i></button>
      <button type="button" id="remove" class="btn btn-danger m-1"><i class="bi bi-dash-circle"></i></button>
    </div>
      <h2>${pClass.name}</h2>
      <p>Teacher IDs: ${pClass.teacherIds.join(', ')}</p>
      <p>Additional text</p>
      <button type="button" id="students" class="btn btn-info">Students</button>
      <button type="button" id="teachers" class="btn btn-info">Teachers</button>
    </div>
  `).join('');
}

const classesTemplate = template(classes);
export default classesTemplate;