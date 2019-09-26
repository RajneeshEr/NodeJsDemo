const fastify = require('fastify')({
    logger: true
})

// Register is very important api or core api of fastify framework 
fastify.register(require('./firstRoute'))

fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })

