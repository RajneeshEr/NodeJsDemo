const fastify = require('fastify')({
    logger: true,
    ignoreTrailingSlash: true // string used to determine how to handle passing / as a route with a prefix.
})

// registers both "/foo" and "/foo/"
fastify.get('/foo/', function (req, reply) {
    reply.send('foo')
})

// Register/plugin is very important api or core api of fastify framework 
fastify.register(require('./firstRoute'))

//I used async/await and promise in this route
fastify.register(require('./routes/fastifyRoutes'))

fastify.listen(3001, async (error, address) => {
    if(error){
        fastify.log.error(error)
        process.exit(1)
    }
    fastify.log.info(`The server started on ${address}`)
})


// It is not working need to explored later 

//Try to write server port listing function with the use of async and promise 

// fastify.listen(3001, new Promise((resolve, reject) => {
//     async (error, address)=>{
//         if (error){
//             fastify.log.error(error)
//             reject(error)
//             process.exit(1)
//         }else{
//             resolve(address)
//         }
//     }
// }))
