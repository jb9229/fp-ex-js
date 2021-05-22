import * as R from "ramda";

// states
const useDb = true;
const db = {};
const arr = ["111-11-1111", "222-22-2222", "333-33-3333"];
const find = (db, ssn) => {
  return {};
};

const fetchStudentFromDb = R.curry(function (db, ssn) {
  return find(db, ssn);
});

const fetchStudentFromArray = R.curry(function (arr, ssn) {
  return arr[ssn];
});

const findStudent = useDb ? fetchStudentFromDb(db) : fetchStudentFromArray(arr);

console.log(findStudent("333-33-3333"));
