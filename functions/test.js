exports.handler = function(event, context, callback){
  const { cart } = JSON.parse(event.body);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: 'Hello ' + cart})
  });
}