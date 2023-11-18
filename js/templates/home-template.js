export default function template(pCountedStudents, pCountedTeachers, pCountedClassses) {
  return `
  <div class="wrapper" id="page1">
    <div class="left-content">
      <p>${pCountedStudents}</p>
      <p>number of students</p>
    </div>
    <div class="middle-content">
    <p>${pCountedTeachers}</p>
      <p>middle content</p>
    </div>
    <div class="right-content">
    <p>${pCountedClassses}</p>
      <p>right content</p>
    </div>
  </div>
`;
}