/*** Type Number ***/
var age: number = 22;

/*** Type Any ***/
function validateUserAge(age: any) {
  if (typeof age == 'number') {
    if (age < 3) {
      return 'toddler';
    } else if (age < 4) {
      return 'pre-schooler';
    } else if (age < 12) {
      return 'school-aged';
    } else if (age < 20) {
      return 'teen';
    } else if (age < 25) {
      return 'young adult';
    } else if (age < 60) {
      return 'middle adult';
    } else {
      return 'late adult';
    }
  }
  return null;
}

/*** Arrays ***/
let array = []; // array type - any
let numberTypeArray: number[] = []; // array type - number
let stringTypeArray: string[] = []; // array type - string

/*** Tuple ***/
let userData: [string, string, number] = [
  'ts1_202001',
  'ts1@email.com',
  202001
]; // user name, user email and user id

/*** Enum ***/
enum GenderEnum {
  male = 'male',
  female = 'female',
  transgender = 'transgender'
}
//It creates a self-executing javascript function
//To avoid this you can use const/let/var

let gender: GenderEnum = GenderEnum.female;
console.log(gender); // logs female

/*** Function ***/
//Valid case
function getCounter(action: string, counterVal: number): number {
  return action == 'increment' ? counterVal + 1 : counterVal - 1;
}

getCounter('decrement', 10);
// Invalid case
// function getCounter(action: string, counterVal: number): string {
//   return action == 'increment' ? counterVal + 1 : counterVal - 1;
// }
// getCounter('decrement');

/*** Objects ***/
let loginUserData: {
  emailId: string;
  userName: string;
  mobileNumber: number;
  readonly userId: number;
} = {
  emailId: 'ts@email.com',
  userName: 'ts',
  mobileNumber: 9876543210,
  userId: 1234
};

loginUserData.userName = 'ts@1234';

// Invalid
// loginUserData.userId = 1212;
