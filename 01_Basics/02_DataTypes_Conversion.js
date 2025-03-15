//Data Type
console.log(3+3);

let name = "Sabbir" //String
let age = 24  //Number
let isLoggedIn = true //bool

//number = 2^53
//bigInt
//string = ""
//bool = true/false
//null = stand alone value
//undefined = value not assigned
//symbol = for uniqueness
//object

console.log(typeof name);
console.log(typeof null);       //null ==> object
console.log(typeof undefined);  //undefined
console.log();


//Conversion & Operation


//string to number
let score = "33abc"
console.log(typeof score);

let valueNum = Number(score)
console.log(typeof valueNum);
console.log(valueNum);
console.log();


//null to number
let score1 = null
console.log(typeof score1);

let valueNum1 = Number(score1)
console.log(typeof valueNum1);
console.log(valueNum1);
console.log();


//undefined to number
let score2 = undefined
console.log(typeof score2);

let valueNum2 = Number(score2)
console.log(typeof valueNum2);
console.log(valueNum2);
console.log();


//"33" --> 33
//"33abc" --> Nan
//true --> 1; false --> 0
//1 --> true; 0 --> false
//""(Empty String) --> false
//"Sabbir" --> true


//Number/string to Boolean
let isLogedIn = ""

let boolIsLogIn = Boolean(isLogedIn)
console.log(boolIsLogIn);
console.log();


//Number to String
let num = 46
let stringNum = String(num)
console.log(stringNum);
console.log(typeof stringNum);  














