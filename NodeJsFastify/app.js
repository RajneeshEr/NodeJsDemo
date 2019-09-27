//This file will be used for configuring the app, and that alone

const fastify = require('fastify')({
    logger: true,
    ignoreTrailingSlash: true // string used to determine how to handle passing / as a route with a prefix.
})

module.exports=fastify