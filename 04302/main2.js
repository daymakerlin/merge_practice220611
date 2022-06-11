// let personObj = new Object();
// personObj.firstName = "Ryan";
// personObj.lastName = "Chung";
// personObj.age = 888;
// personObj.eyeColor = "red";
// personObj.smile = function(){
//     console.log("^_______^");
// };

// personObj.smile();



// let personObj = { 
//     firstName : "Ryan",
//     lastName : "Chung",
//     age : 888,
//     eyeColor : "red",
//     smile : function(){
//     console.log("^_______^");
// }};

// personObj.smile();



function Person(firstName,lastName,age,eyeColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.smile = function(){
        console.log("^______^");
    };

}
var newBorn = new Person("Ryan","Chung",888,"Red");

newBorn.smile();
