const User = require("../users/users-model")

function logger(req, res, next) {
  // DO YOUR MAGIC
  const reqMethod = req.method
  const reqUrl = req.originalUrl
  const reqTimestamp = new Date().toLocaleString()
  console.log(`${reqMethod}, ${reqUrl}, ${reqTimestamp}`)
  next()
}

// interacting with DB? use async
async function validateUserId(req, res, next) {
  // DO YOUR MAGIC
  // fetch a user with a given ID
  // => is it there? proceed
  // => not there? throw an error
  try {
    const userLookup = await User.getById(req.params.id)
    if (!userLookup) {
      res.status(404).json({
        message: "user not found"
      })
    } else {
      req.user = userLookup
      next()
    }
  } catch (err) {
    res.status(500).json({
      message: "error encountered when validating user ID"
    })
  }
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
  const { name } = req.body
  if (!name || !name.trim()) {
    res.status(400).json({
      message: "missing required name field"
    })
  } else {
    req.name = name.trim()
    next()
  }
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
  const { text } = req.body
  if (!text || !text.trim()) {
    res.status(400).json({
      message: "missing required text field"
    })
  } else {
    req.text = text.trim()
    next()
  }
}

// do not forget to expose these functions to other modules
module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost,
}