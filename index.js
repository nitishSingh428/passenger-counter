// document.getElementById("count-el").innerText = 5;
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count);

// let myAge = 22;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// function increment(){
//     console.log("The button was clicked")
// }

// function countdown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countdown();

// let lapsCompleted = 0;

// function incrementLap(){
//     lapsCompleted = lapsCompleted + 1;
// }

// incrementLap();
// incrementLap();
// incrementLap();
// console.log(lapsCompleted);


// let countEl = document.getElementById("count-el");  // pass in arguments
// console.log(countEl);
// let count = 0;
// function increment(){
//     console.log("clicked");
//     count += 1;
//     countEl.innerText = count;
//     // document.getElementById("count-el").innerText = count;
// }

// DOM : Document Object Model
// document keyword in javascript is of data type object
// i.e they have taken html document and shoved it into a javascript object.
// model is type of representation. 


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    count += 1
    countEl.textContent = count;

}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr;
    // console.log(count);
    countEl.textContent = 0;
    count = 0;
   
}

console.log("Let's count people on the subway!")




