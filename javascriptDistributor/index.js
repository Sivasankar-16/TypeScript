"use strict";
var age = 22;
function validateUserAge(age) {
    if (typeof age == 'number') {
        if (age < 3) {
            return 'toddler';
        }
        else if (age < 4) {
            return 'pre-schooler';
        }
        else if (age < 12) {
            return 'school-aged';
        }
        else if (age < 20) {
            return 'teen';
        }
        else if (age < 25) {
            return 'young adult';
        }
        else if (age < 60) {
            return 'middle adult';
        }
        else {
            return 'late adult';
        }
    }
    return null;
}
let array = [];
let numberTypeArray = [];
let stringTypeArray = [];
let userData = [
    'ts1_202001',
    'ts1@email.com',
    202001
];
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["male"] = "male";
    GenderEnum["female"] = "female";
    GenderEnum["transgender"] = "transgender";
})(GenderEnum || (GenderEnum = {}));
let gender = GenderEnum.female;
console.log(gender);
function getCounter(action, counterVal) {
    return action == 'increment' ? counterVal + 1 : counterVal - 1;
}
getCounter('decrement', 10);
let loginUserData = {
    emailId: 'ts@email.com',
    userName: 'ts',
    mobileNumber: 9876543210,
    userId: 1234
};
loginUserData.userName = 'ts@1234';
//# sourceMappingURL=index.js.map
