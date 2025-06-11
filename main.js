import _ from 'lodash';

const school = [
  { department: 'finance', students: 10 },
  { department: 'physics', students: 10 },
  { department: 'maths', students: 10 },
  { department: 'english', students: 50 },
  { department: 'geology', students: 4 }
];

const hasSmallsStudents = _.curry((element, obj) => obj.students < element);

export const getTotalStudents = () => school.reduce((acc, dept) => acc + dept.students, 0);
export const setStudents = (val) => (students = val);

export const getTotalStudentsOfSmallDepartments = (school) => (number) => {
  const smallDepartments = school.filter(hasSmallsStudents(number));
  return smallDepartments.reduce((acc, dept) => acc + dept.students, 0);
};

console.log(getTotalStudentsOfSmallDepartments(school)(11));
