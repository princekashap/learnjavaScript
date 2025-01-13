// object
const msmy = Symbol("key1")

const userDetail={
    name: "prince",
    msmy:"mykey1",
    gmail: "prince123@gmail.com",
    Islogedin: true,

}

console.log(userDetail.gmail)
console.log(userDetail["name"]);
console.log(typeof(userDetail.msmy));
console.log((userDetail["msmy"]));


