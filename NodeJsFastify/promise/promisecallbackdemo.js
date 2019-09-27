//Let’s say you have a function that will print a string after a random amount of time:

//1-------------Simple Function Example------------------------
function printString(string){
    setTimeout(() => {
        console.log(string)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

function printAll(){
    printString("A")
    printString("B")
    printString("C")
}

printAll()
//End 1---------------------------

//2-------------CallBack Example------------------------
Callback, When the first function is done, it will run the second function.
function printString(string, callback){
    setTimeout((error, data)=>{
        if(error){
            console.log(error)
            callback(error) //If any error found the callback function terminate the execution, next function will not call
        }
        console.log(string)
        callback()  //This function will call next function
    }, 
    Math.floor(Math.random() * 100) + 1)
}
  
function printAll(){
    printString('A', ()=>{
        printString('B',()=>{
            printString('C',()=>{})
        })
    })
} 

printAll()
//End 2--------------

//Strat 3------Promise

//Promises try to fix this nesting problem. Let’s change our function to use
function printString(string){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(string)
            resolve()
        },
        Math.floor(Math.random() * 100) + 1
        )
    })
}

function printAll(){
    printString('A')
    .then( ()=> { return printString('B') })
    .then( () =>{ return printString('C') })
    .then( () =>{ return printString('D') })
}

printAll()
//End 3----------------------


//Start 4 , Async/Await---------

//AWAIT,It makes your asynchronous code look more like synchronous/procedural code, 
//which is easier for humans to understand, no need to change printString method
async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
}

printAll()

//End 4-----------