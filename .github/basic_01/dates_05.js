const date = new Date
console.log(date);

console.log(date.getDate());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

console.log(typeof date);

let createMydate = new Date ("12-2-24")
console.log(createMydate.toLocaleString());

let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(createMydate.getTime());

console.log(Math.floor(Date.now()/1000));









