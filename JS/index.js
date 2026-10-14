// Primitive Data Type 
// Number
// String
// Boolean
// undefined (also a data type: in which there is no defined value, not even null : by default all the values in js are undefined)
// null


// let a = 5;
// console.log(a, typeof a);
// a = "Hello";
// console.log(a, typeof a);
// a = true;
// console.log(a, typeof a)
// a = null;
// console.log(a, typeof a);
// a = undefined;
// console.log(a, typeof a);


// let p = 5;
// if(p == "5"){
//     console.log(true);
// }


// Secondary Data Type 
// Object
// Array
// Function


var myObj = {
    name: "Ayush",
    occupation: "Lecturer",
    show: showName
};

myObj.show()

function showName(){
    console.log(myObj.name);
}


const yourObj = {
    name: "GLA",
    loc: "Mathura"
};

yourObj.loc = "Noida";
console.log(yourObj);

