//const fastify = require('fastify')

const path = '/'

const route = async (fastify, options)=>{
    // await can ‘wait’ for a async function to resolve or reject a value
    await fastify.get(path,response)
}

const response = async (request, response)=>{
    response.send({
        "FirstName":'Rajneesh',
        "LastName":'Yadav',
        "CellNumber":'7906177756'
    })
}

module.exports = route
