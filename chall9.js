const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
];

let i = 0;
students.splice(0, 3);
students.splice(-2)
while (i < students.length) {
    console.log(students[i]);
    i++;
}