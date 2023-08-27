function logger(req, res, next) {
  // DO YOUR MAGIC
  const reqMethod = req.method
  const reqUrl = req.originalUrl
  const reqTimestamp = new Date().toLocaleString()
  console.log(`${reqMethod}, ${reqUrl}, ${reqTimestamp}`)
  next()
}

function validateUserId(req, res, next) {
  // DO YOUR MAGIC
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
}