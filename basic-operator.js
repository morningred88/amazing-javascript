//Example of the basic operators
//Math operators
const now = 2050;
const ageTom = now - 1995; //55
const ageJen = now - 2014; //36
console.log(ageTom, ageJen);
console.log(ageTom / 4, ageJen * 3, 2 ** 4); //13.75 108 16
//2 ** 4 means 2 to the power of 4 = 2 * 2 * 2 * 2

//Assignment operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 =101
x--;// x = x -1 =100
console.log(x);

//Comparison operator, to produce booleans
//>, <, >==, <==
console.log(ageTom > ageJen); //true
console.log(ageJen >= 40); //false
console.log(now - 1995 > now - 2014); //true
//Math operator executed first than the comparison operator