export default function template(pNumberOfStudents) {
  return `
  <div class="wrapper" id="page1">
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