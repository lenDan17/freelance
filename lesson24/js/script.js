

//функции
//function showName (){
//    console.log('wasia');
//}
//setTimeout(showName, 0);
//console.log('kolia');


//et showMessage = function (){
 //   console.log('message');
//}
//showMessage();

/*'use strict'
let showMessage;
if ( 2 > 1) {
 showMessage = function (){
        console.log('message');
    }
}
showMessage();*/

//масиви

let arr = ['Ваня', 'Иштван' , 'Оля',]; 
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);

//2 
let user = ['Ваня', 'Иштван',];
user.splice(2 ,0 ,'Оля', );
console.log(user);
//
user.splice(0 , 1 ,'Петя', );
console.log(user);
//
let userThree = ['Ваня', 'Иштван' , 'Оля',];
userThree.splice(0 , 0 ,'Петя','Маша' ,);
console.log(userThree);


//3
let userOne = ['Ваня', 'Иштван' , 'Оля',]; 
let userTwo = userOne.splice(1 , 1 ,);
console.log(userOne);
console.log(userTwo);

//4
let str = 'Ваня,Иштван ,Оля';
let strOne = str.split(',');
console.log(strOne);

//5 початкове значення не вірне , зміна arrTwo не обьявлена
let arrOne = [9, 2 , 8,];
let reduseValue = arrOne.reduce (function ( previousValue , item , index , arrey){
    console.log(previousValue);
})

// 1
let dataSey = document.querySelector('.data-sey-hi');
console.log(dataSey);
dataSey.setAttribute('data-Sey-hi' , "yes");
console.log(dataSey);

// 2
let list = document.querySelector('ul');
let listItem = list.innerHTML;
console.log(listItem);

// 3
let likeIt = document.querySelector('.like');
console.log(likeIt);

// 4 в кінці списку ul

//координати
const mainOne = document.documentElement;
const mainEl = mainOne.clientWidth;
console.log(mainEl);

//2
function skroolToOne (){
    window.scrollTo(0 , 100);
}
setTimeout(skroolToOne , 1000);
// 3
const sej = document.querySelector('.data-sey-hi');
const getSej = sej.getBoundingClientRect();
console.log(getSej);

const practik = document.querySelector('.practic-dom');
const practikDom = practik.getBoundingClientRect();
console.log(practikDom);

const block = document.querySelector('.block__title');
const blockTitle = block.getBoundingClientRect();
console.log(blockTitle);
