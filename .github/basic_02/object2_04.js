const tender = {}
//console.log(tender);

const userguide ={
    username:{
        name: "prince",
        usercity:{
            name: "Hathras"
        }
    }

    }
//console.log(userguide.username.usercity);

const obj1 ={1: "a",2: "b"}
const obj2 ={3: "a",4: "b"}
const obj3 ={5: "a",6: "b"}

const otherObj =Object.assign({},obj1,obj2,obj3)
//console.log(otherObj);

const obj5 ={obj1,obj2}
//console.log(obj5);

const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);

const user = [
    {

    },
    {

    },
    {

    }
]
user[1]
//console.log(userguide);
//console.log(user);

console.log(Object.keys(otherObj));

console.log(Object.values(otherObj));

console.log(Object.entries(otherObj));

console.log(userguide.hasOwnProperty(""));
