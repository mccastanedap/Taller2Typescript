import { dataCourses } from './dataCourses.js';
import { dataStudent } from './dataStudent.js';
var coursesTbody = document.getElementById('courses');
var studentsTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBoxCredits = document.getElementById("search-box-cr");
var inputSearchBoxCreditsH = document.getElementById("search-box-cr2");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentsInTable(dataStudent);
totalCreditElm.innerHTML = "" + ("Total Creditos:     " + getTotalCredits(dataCourses));
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentsInTable(students) {
    console.log('Desplegando info del estudiante');
    students.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + "Codigo" + "</td>\n                                <td>" + student.codigo + "</td>";
        var trElement2 = document.createElement("tr");
        trElement2.innerHTML = "<td>" + "Cedula" + "</td>\n                                <td>" + student.cedula + "</td>";
        var trElement3 = document.createElement("tr");
        trElement3.innerHTML = "<td>" + "Edad" + "</td>\n                                <td>" + student.edad + "</td>";
        var trElement4 = document.createElement("tr");
        trElement4.innerHTML = "<td>" + "Direccion" + "</td>\n                                <td>" + student.direccion + "</td>";
        var trElement5 = document.createElement("tr");
        trElement5.innerHTML = "<td>" + "Telefono" + "</td>\n                                <td>" + student.telefono + "</td>";
        studentsTbody.appendChild(trElement);
        studentsTbody.appendChild(trElement2);
        studentsTbody.appendChild(trElement3);
        studentsTbody.appendChild(trElement4);
        studentsTbody.appendChild(trElement5);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.toLowerCase().match(nameKey.toLowerCase());
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
function applyFilterByCredits() {
    var max = inputSearchBoxCreditsH.valueAsNumber;
    max = max ? max : 3;
    var min = inputSearchBoxCredits.valueAsNumber;
    min = min ? min : 1;
    console.log(min);
    console.log(max);
    if (min > max)
        alert('El rango no es valido. \nEl mínimo debe ser más grande que el máximo');
    clearCoursesInTable();
    var coursesFiltered = searchCourseInCreditsRange(max, min, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseInCreditsRange(max, min, courses) {
    return courses.filter(function (x) { return (x.credits >= min && x.credits <= max); });
}
