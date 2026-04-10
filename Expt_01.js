// -- let var const -- Activity 01

{
    //varibles declared with let can't be redeclared
    let x= 2;// Provides Block Scope in js
    console.log(`This is a let variable x = ${x}`);      
    document.writeln(`This is a let variable x = ${x}<br>`);  

}

{
   //varibles declared with var CAN be redeclared
    var x= 2;
    console.log(`This is a var variable x = ${x}`);  
    document.writeln(`This is a var variable x = ${x}<br>`);  

}

{
    //variable defined with const CAN'T be reassigned.
    const PI = 3.1415;
    //PI =3.14;    //gives an error
    console.log(`This is a const variable PI = ${PI}.`);  
    document.writeln(`This is a const variable PI = ${PI}.<br>`);
}

//--Check student is pass or fail --Activity 05
const mark =35;
if (mark>=50){
    console.log("Student is passed!!");
    document.writeln("Studetn is passed!<br>");
}
else{
    console.log("Student is failed!!");
    document.writeln("Student is failed!!<br>");
}
//--Display numbers upto 50 -- Activity 05
console.log("Numbers froms 0 to 10: ")
document.writeln("Numbers froms 0 to 10: ")
for(i=0;i<=10;i++){
    console.log(i);
    document.writeln(i)
}
//Block of code --Activity 02
let a=2;
{
    let a=10;
    console.log(`This value ${a} of a is inside the block of code.`);
    document.writeln(`This value ${a} of a is inside the block of code.<br>`);
}
console.log(`This value ${a} of a is outside the block of code.`);
document.writeln(`This value ${a} of a is outside the block of code.<br>`);

var b=20;
{
    var b =30;
    console.log(`This value ${b} of b is inside the block of code.`);
    document.writeln(`This value ${b} of b is inside the block of code.<br>`);
}
console.log(`This value ${b} of b is outside the block of code.`);
document.writeln(`This value ${b} of b is outside the block of code.<br>`);

const c=40;
{
    const c=60;
    console.log(`This value ${c} of c is inside the block of code.`);
    document.writeln(`This value ${c} of c is inside the block of code.<br>`);
}
console.log(`This value ${c} of c is outside the block of code.`);
document.writeln(`This value ${c} of c is outside the block of code.<br>`);

//--Display student information-- Activity 03
console.log("Display student information : ");
let fName ="Atharv";
let lName ="Kurane";
let age = 19;
let cName= "DKTE";
let result = true;
let cgpa = 8.00;

console.log(`FirstName : ${fName}`);
document.writeln(`FirstName : ${fName}<br>`);
console.log(`LastName : ${lName}`);
document.writeln(`LastName : ${lName}<br>`);
console.log(`Age : ${age}`)
document.writeln(`Age : ${age}<br>`)
console.log(`College Name : ${cName}`);
document.writeln(`College Name : ${cName}<br>`);
console.log(`Result :${result}`)
document.writeln(`Result :${result}<br> `)
console.log(`CGPA : ${cgpa}`);
document.writeln(`CGPA : ${cgpa}<br>`)

// -- Check number is even/odd -- Activity 04
document.writeln("Check if num is even or odd : ");
var no = 56;
if (no%2==0){
    console.log(`${no} is even.`)
    document.writeln(`${no} is even.<br>`)
}
else{
    console.log("Number is odd.");
    document.writeln("Number is odd.<br>");
}

//--Check student is pass or fail --Activity 05
const marks =35;
if (marks>=50){
    console.log("Student is passed!!");
    document.writeln("Studetn is passed!<br>");
}
else{
    console.log("Student is failed!!");
    document.writeln("Student is failed!!<br>");
}
//--Display numbers upto 50 -- Activity 05
console.log("Numbers froms 0 to 10: ")
document.writeln("Numbers froms 0 to 10: ")
for(i=0;i<=10;i++){
    console.log(i);
    document.writeln(i)
}