const path ='/'

const options = {
    schema : {
        response : {
            200 : {
                type : 'Object',
                property :{
                    "FirstName" : 'Rajneesh',
                    "LastName" : 'Yadav',
                    "Greeting" : 'Hello'
                }
            }
        }
    }
}

// async function with promise [Promise now will handle all condition in case of error or exception]
const handler = async (request, response)=>{
    new Promise((resolve, reject) => {
        response.send(
            {   "hello": 'world',
                "Greeting":'This is home using Promise functionality'
            },(error,data) => {
            if(error){
                reject(error)
            } else{
                resolve(data)
            }
        })
    })
}
    
const fastifyRoute = async (fastify,options)=>{
    // await can ‘wait’ for a async function to resolve or reject a value
    //Important! await can only be used inside an async function.
    await fastify.get(path,options,handler)
}

module.exports = fastifyRoute;
