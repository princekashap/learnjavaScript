//object 
// object Literal
const msmy = Symbol("key1")

const userDetail={
    name: "prince",
    [msmy]:"mykey1",
    gmail: "prince123@gmail.com",
    Islogedin: true,

 }

console.log(userDetail.gmail)
console.log(userDetail["name"]);
console.log(typeof(userDetail.msmy));
console.log((userDetail["msmy"]));

userDetail.gmail = "prince1111@gmail.com"
console.log(userDetail);
//Object.freeze(userDetail)
userDetail.gmail = "prince123456@gmail.com"
console.log(userDetail);

userDetail.greeting =function() {
    console.log("Hello Js user");
    
    
}
console.log(userDetail.greeting());

userDetail.greetingTwo =function(){
    console.log(`This is ${this.name}`);
    
}
console.log(userDetail.greetingTwo());




