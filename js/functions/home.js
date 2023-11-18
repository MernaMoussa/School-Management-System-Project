function countStudents(students) {
    const numberOfStudents = students.reduce((accumulator, student) => accumulator + 1, 0);
    return numberOfStudents;
}

export { countStudents };