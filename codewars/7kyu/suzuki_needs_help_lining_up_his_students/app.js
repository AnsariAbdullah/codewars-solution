function lineupStudents(students){
  return students.split(' ')
    .sort()    
    .reverse() 
    .sort((a, b) => b.length - a.length);
}