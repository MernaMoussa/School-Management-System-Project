
export default function headerTemplate() {
  return `
  <nav class="navbar navbar-expand-lg bg-body-tertiary nav-pills mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LMS</a>
    <ul class="nav " id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onclick="changeTab('home')">Home</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-classes-tab" data-bs-toggle="pill" data-bs-target="#pills-classes" type="button" role="tab" aria-controls="pills-classes" aria-selected="false">Classes</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-teachers-tab" data-bs-toggle="pill" data-bs-target="#pills-teachers" type="button" role="tab" aria-controls="pills-teachers" aria-selected="false">Teachers</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="pills-students-tab" data-bs-toggle="pill" data-bs-target="#pills-students" type="button" role="tab" aria-controls="pills-students" aria-selected="false">Students</button>
      </li>
    </ul>
    <i class="bi bi-person-circle fs-3"></i>
  </div>
</nav>
    `;
}