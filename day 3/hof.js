const arr=[1,2,3,4,5,6,7,8,9,10];
const multipleOfThree=arr.map((num) =>console.log(num*3));
console.log(multipleOfThree);

const divisiblebyfive = arr.filter((num) => num%5===0);
console.log(divisiblebyfive);

const firstdivisiblebyfive = arr.find((num) => num%5===0);
console.log(firstdivisiblebyfive);

const sumofarr=arr.reduce((num,acc) => num + acc, 0);
console.log(sumofarr);