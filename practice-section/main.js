import _ from 'lodash';
let students = 3;

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

const getTotalStudentsOfSmallDepartments = (school) => (number) => {
  const smallDepartments = school.filter(hasSmallsStudents(number));
  return smallDepartments.reduce((acc, dept) => acc + dept.students, 0);
};

// console.log(getTotalStudentsOfSmallDepartments(school)(11));

const findSmallDepartments = (array) => (limit) => {
  const helper = (idx = 0, result = []) => {
    if (idx >= array.length) return result;
    if (array[idx].students < limit) result.push(array[idx].department);
    return helper(idx + 1, result);
  };
  return helper();
};

console.log(findSmallDepartments(school)(11));
