//const fastify = require('fastify')

async function route(fastify, options){
    fastify.get('/',response)
}

async function response(request, response){
    response.send({
        "FirstName":'Rajneesh',
        "LastName":'Yadav',
        "CellNumber":'7906177756'
    })
}

module.exports = route;