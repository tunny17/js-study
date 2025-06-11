import { getTotalStudents, setStudents } from './main.js';

const isStudent = true;

const login = () => {
  const students = getTotalStudents();

  if (isStudent) {
    setStudents(students + 1);
    console.log('there are ' + students + ' in this school');
  } else {
    console.log('there are ' + students + ' in this school');
  }
};

login();
