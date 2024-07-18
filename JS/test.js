/*
let i=1

const myPromise = new Promise((resolve , reject)=>{
  resolve(i);
})

function loopCheck(i){
  let checkbox = document.getElementById(`a${i}`)
  checkbox.checked = true;

  setTimeout(()=>{
    checkbox.checked = false;
    i = i + 1;
    return loopCheck(i);
  },1000)
}

myPromise
.then(loopCheck(i))
.then()
.then()
.then()
*/


/* 
function loopCheck(i){
  let checkbox = document.getElementById(`a${i}`)
  checkbox.checked = true;

  setTimeout(()=>{
    checkbox.checked = false;
    return i + 1;
  },2000)
}

myPromise
.then(loopCheck(i))
.then(loopCheck(i))
.then(loopCheck(i))
.then(loopCheck(i))
*/


/*
function loopCheck(i){
  return new Promise(function(resolve, reject) {
    let checkbox = document.getElementById(`a${i}`)
    checkbox.checked = true;
    setTimeout(()=>{
      checkbox.checked = false;
      resolve();
    }, 1000);
  })
}



let myPromise = Promise.resolve();
for(let i=1; i<5; i++){
  myPromise = myPromise
  .then(loopCheck.bind(this, i))
}
*/



/*
for(let i=1; i<5; i++){
  loopCheck(i);
}
*/

/*
function wait(){
  let promise = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve()
    },2000)
  })
  return promise;
}

let promise = wait();

promise
.then(()=>{
  console.log(1)
  let promise = wait();
  return promise
})
.then(()=>{
  console.log(2)
  let promise = wait();
  return promise
})
.then(()=>{
  console.log(3)
  let promise = wait();
})
*/

let array = [1,2,3,4,5]

function wait(number){
  let promise = new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(array[number])
      resolve();
    },2000)
  })
  return promise;
}

let promise = Promise.resolve();
for(let z=0; z<2; z++){
  for(let i=0; i<array.length; i++){
    promise = promise
    .then(wait.bind(this,i))
  }
}

/*
let promise = Promise.resolve();
console.log(promise);
promise = promise
.then(wait.bind(this,1));
console.log(promise);
*/





