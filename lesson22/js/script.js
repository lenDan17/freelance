"use strict"
console.log('я учу js');

let colorEyes = 'green';
console.log(colorEyes);

let user;
let userName = "Вася";
user = userName;
console.log(user);

let userHeight = 145 / 0;
console.log( userHeight);
console.log(typeof userHeight);


//оператори javascript==========================================

//console.log('35' + - "22");

console.log('35' *  "22");

//console.log('558' > 22++);

let userCounter = 0;
let newUser = userCounter++;
console.log(newUser);

console.log(!false && 11 || 18 && ! '');

let name = 0;
console.log(name ?? "без імені");


// if else========================================================
if(1 === "1") {
    console.log('Истина!');
}else {
    console.log('Ложь!')
};
if(5 == "5") {
    console.log('Истина!');
}else {
    console.log('Ложь!')
};

let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

if(0) {
    console.log('Ложь!')   
}else if (" ") {
    console.log('Истина!');
};

//цикли
let sum = 0;
while( sum < 5 ){
    console.log(sum);
    sum++;}
   

 /*for( let num = 0; num < 5 ; num ++){
console.log(num)};*/


 /*let num = 8;
while(num) {
    console.log(num);
    num--;
}

    останнє число 1
   
*/
let num = 0 ;
while(num < 3) {
    console.log(`число: ${ num}`);
    num++
}
 for (let num =0 ; num < 2; num++){
for(let size =0; size < 3; size++ ){
if(size == 2) break;
console.log(size);}
}


//ЧИСЛА================================================
let numOne = 1.005 + Number.EPSILON;
let numTwo = Math.round(numOne * 100) / 100;
console.log(numTwo);

let value = parseFloat("158.58px");
console.log(value);

let valueOne = 58 + "Фриланс";
if( 58 + "Фриланс"  !== NaN){
console.log("результат NaN");
}


let numMax = (Math.max (10, 58, 39, -150, 0));
console.log(numMax);

let nunNum = Math.floor(58.858);
console.log(nunNum);

// STRING==========================
/*1 завдання не вірне , треба одвротні лапки */
//2
let textIn = " фрілансер";
let oneText = textIn[6];
console.log(oneText);
//3 буду строка 123456
//4
let subText = " Фрілансер";
console.log(subText.toUpperCase() );
//5
let text = " фрілансер";
console.log(text .slice(4 , 7));

//6
let twoText = " фрілансер";
console.log(twoText.includes("лан" , 4));
