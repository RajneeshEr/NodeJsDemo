const fastify = require('fastify')({
    logger:true
})

//Declare a route 
// fastify.get('/',(_request, response, _query)=>{
//     response.send({
//         "Name":'Rajneesh',
//         "Age":'26'
//     })
// })

// fastify.listen(3000, (err, address)=>{
//     if(err){
//         fastify.log.error(err)
//     }
//     fastify.log.info(`server is listening on ${address}`)
// })


//Declare a route with async

fastify.get('/', async(_request, _response)=>{

    _response.send({
        "Name":'Rajneesh'
    })
})


const start = async() => {
     try {
         fastify.listen(3000, (erro, address) => {
             //fastify.log.info(`Server listing on ${address}`)
         })
     } catch (error) {
         fastify.log.error(error)
     }
}

start()