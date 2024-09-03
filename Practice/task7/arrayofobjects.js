const students = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grade: "A",
    subjects: ["Math", "Physics", "Chemistry"],
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    grade: "B",
    subjects: ["Biology", "Math", "English"],
  },
  {
    id: 3,
    name: "Charlie Brown",
    age: 21,
    grade: "C",
    subjects: ["History", "Math", "Geography"],
  },
];


// Add new student
students.push({
    id: 5,
    name: "Eva Adams",
    age: 20,
    grade: "B",
    subjects: ["Biology", "Chemistry", "English"],
})
console.log(students);


//find by id and update grade
const studentId = 2;
const newGrade = 'A';
let stdtoupdate = students.find(student => student.id == studentId);
if(stdtoupdate){
    stdtoupdate.grade =  newGrade;
}
console.log(students);


//find by id and delete
let newStudents = students.filter(student => student.id !== 3);
console.log(newStudents);
//filter by grade


let grade = 'A';
let stdByGrade = students.filter(student => student.grade === grade);
console.log(stdByGrade);

//filter by name

let StdName = 'Diana Prince';
let stdByName = students.filter(student => student.name === StdName);
if(stdByName.length == 0){
    console.log('Student not found');
}else{
    console.log(stdByName);
}

//list oof all subjects which was taken by all thestudents
let AllSubjects = [...new Set(students.flatMap(student => student.subjects))];
console.log(AllSubjects);

//sorting by Name
students.sort((a,b)=> a.name.localeCompare(b.name));
console.log(students);