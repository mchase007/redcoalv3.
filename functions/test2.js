exports.handler = (event, context, callback) => {

  const viewPacked = JSON.parse(event.body)
  return callback(null, {
  statusCode: 200,
  body: JSON.stringify({msg: viewPacked})
  }) 
  }

// exports.handler = (event, context, callback) => {
//   /* parse the string body into a useable JS object */
//   const data = JSON.parse(event.body)
//   console.log("Function `todo-create` invoked", data)
// }