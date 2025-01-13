const heroes =["spiderman","thor","shaktiman"]
console.log(heroes);


const hero =["Ironman","spreadman","sliderman"]

// const allheroes = heroes.concat(hero)
// console.log(allheroes);

const other_array =[...heroes,...hero]
console.log(other_array);

const another_array =[1,2,3,[4,5],6,7,[8,9,[10,11,[13,14,15]]]]
const real_array =another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("prince"))

console.log(Array.from("prince"));

console.log(Array.from({name: "prince"}));  // It will be always return empty array bacause name is not a part of the array

let score1 = 100
let score2=200
let score3 =300

console.log(Array.of(score1,score2,score3));


