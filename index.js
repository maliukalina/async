//const constants = require ('buffer')
/*const fs = require('fs')
const { resolve } = require('path/posix')


    const data = fs.readFileSync('./data.json')
   // console.log(readDate.toString())
  
 fs.readFile('./data.json',(err, myDate)=> {
  console.log(myDate.toString())

})

//console.log(readDataAsync)
//console.log(myDate)*/

//const { resolve } = require("path/posix");

/*const promise = new Promise((ressolve, reject) => {
  setTimeout(() => {
    resolve ('Hello World')
  }, 2000)
})

.then(() => console.log("wont log"))
.catch((e) => console.log(e))

const fs = require('fs/promise')
const { resolve } = require('path/posix')
const util = require('util')
const resdFilePromise = util.promisefy(fs.)*/

/*const p1 = new Promise((resolve) => {
  setTimeout(()  => {
    resolve(1)
  }, 1000)
  })
  onst p2 = new romise((resolve) => {
    setTimeout(()  => {
      resolve(2)
    }, 500)
    })


  p1.then((value) => {
    console.log(value)
  })
  p2.then((value2) => {
    console.log(value2)
  })

Promise.all([p1,p2]).then((values) => console.log(values))*/

/*console promise = new Promise((ressolve) => {
  setTimeout(() => {
    ressolve(1)
  },2000)
})
async function mreturnPromise() { 
  const value = await promise
  console.log(value)

  return 'hello'
}
 returnPromise().then()*/


/* const p1 = new Promise((resolve) => {
   setTimeout() => {
     resolve(1)
   }
 })*/

 const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(1)
  }, 2000)
})

 async function returnPromise() {
   const value = await promise
   console.log(value)
   return "Hello"
 }
  const promise2 = returnPromise()
  console.log(promise2)

 
