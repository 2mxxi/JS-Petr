"use strict";

// const arr = [1, 3, 5, 10, 2, 4, 14]
// arr.sort(compareNum)
// console.log(arr)

// function compareNum(a, b){
//     return a - b;
// }

const building = {
  stages: 2,
  rooms: 4,
  color:{
    roof: 'green',
    basement: 'red'
  }
}

const newBuilding = {...building}

newBuilding.color.roof = 'grey'

console.log(newBuilding)
console.log(building)

const noMutationBuilding = JSON.parse(JSON.stringify(building))
noMutationBuilding.color.roof = "red"
console.log(noMutationBuilding)

const someNewCopy = Object.assign(building)
someNewCopy.rooms = 10
console.log(someNewCopy)

const myObj = {
  a:1,
  b:2,
  c:3
}

const newArray = [];

for (const key in myObj) {
  if (myObj.hasOwnProperty(key)){
    newArray.push(key)
  }
}

console.log(newArray)

// const expArr = ['elephant', 'hippo', 'tiger']

// expArr.forEach(el => {
//   console.log(expArr[1])
// });

let y = 

console.log( false - null + true )