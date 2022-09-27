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

  let stud2 = students.slice(3,-2);
  console.log(stud2);

  i = 0 
  while(i < stud2.length){
    console.log(i);
    console.log(stud2[i]);
    i++
  }

  console.log(students);