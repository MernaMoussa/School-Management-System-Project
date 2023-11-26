import homeTemplate from "../../pages/home.js"
import classesTemplate from "../../pages/classes.js"
export default function contentTemplate() {
    return `
<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">${homeTemplate}</div>
    <div class="tab-pane fade d-flex flex-wrap justify-content-center" id="pills-classes" role="tabpanel" aria-labelledby="pills-classes-tab" tabindex="0">${classesTemplate}</div>
    <div class="tab-pane fade" id="pills-teachers" role="tabpanel" aria-labelledby="pills-teachers-tab" tabindex="0">...</div>
    <div class="tab-pane fade" id="pills-students" role="tabpanel" aria-labelledby="pills-students-tab" tabindex="0">...</div>
</div>  `
}