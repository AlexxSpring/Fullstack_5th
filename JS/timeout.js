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

var totalsecondleft = 900;
var counter = 0;

let timer = setInterval( ()=> {
    totalsecondleft -= 1;
    console.log(counter + " seconds have passed");
    if(totalsecondleft == 0){
        clearInterval(timer);
    }
}, 1000);


function display(){
    let seconds = totalsecondleft % 60;
    let minutes = Number.parseInt(totalsecondleft/60);

    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}
