// Handelling Asynchronous data in JavaScript(Promise)
let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(40);
    },2000)
})

waitingData.then((data) => {
    console.log(a + data);
})


// Handelling Asynchronous data in JavaScript(Callback)
function multiplyByTwo(num, callback) {
    setTimeout(() => {
        callback(num * 2);
    }, 2000);
}

multiplyByTwo(10, (result) => {
    console.log(result);
});