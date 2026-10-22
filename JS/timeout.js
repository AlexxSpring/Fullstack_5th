// var counter = 0;

// setInterval(() => {
//     counter++;
//     console.log(counter + " seconds have passed");
// }, 1000)


// var timer = 15;

// counter = 90; //seconds

// setTimeout(setInterval( ()=> {
//             counter--;
//             console.log(parseInt(counter/60), ":", counter%60);
//             }, 1000),
//             90
// )


// // Timer 
// var totalsecondleft = 900;
// var counter = 0;

// let timer = setInterval( ()=> {
//     totalsecondleft -= 1;
//     console.log(counter + " seconds have passed");
//     if(totalsecondleft == 0){
//         clearInterval(timer);
//     }
// }, 1000);


// function display(){
//     let seconds = totalsecondleft % 60;
//     let minutes = Number.parseInt(totalsecondleft/60);

//     document.getElementById("min").innerHTML = minutes;
//     document.getElementById("sec").innerHTML = seconds;
// }
// display();



// MAP function         q
let arr = [1,2,3,4,5];

// Create an array with squares
let newArr = arr.map(n => n*n);
// let newArr = arr.map( (n)=> { return n*n}) this is same as the above line
console.log(newArr);



newArr = arr.filter(n => n > 3); // in map : number of elements must be equal - here filter is used.
console.log(newArr);


let elem = arr.find(n => n>3);
console.log(elem);


elem = arr.reduce( (sum, n) => sum+=n, 0); // 0 is the initial value of sum
// In reduce two parameters are passed - 1st is the function and 2nd is the initial value of sum
console.log(elem);


const add = (a,b) => {let c = a+b; return c;};
console.log(add(5,6));

const sub = (a,b) => { return a-b };
console.log(sub(5,6));

const mul = (a,b) => a*b;
console.log(mul(5,6));

