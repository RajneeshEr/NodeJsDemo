//callbacks, They exist because of Node’s asynchronous nature 

//CallBacks hell problem -- refer the CallBack.md

const fs = require('fs')


// Call Back Example, here I am using fs.stat() to get file information
fs.stat('input.txt', (error, stat)=> {
    if(error){
        console.log(error)
    } else {
        console.log(stat)
        console.log('Got File info successfully ...!')
    }
})

//Let me create one custom callback
const checkfile = function(arg, callback){
    if(typeof arg !== 'number'){
        return callback('Not a number')
    }
    callback(null, 'Yes It is a number')
}

const input = 15

checkfile(input, (error, data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})
