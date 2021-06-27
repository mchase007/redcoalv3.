const axios = require('axios')

exports.handler = function (event,context,callback){

  const parsedBody = JSON.parse(event.body);
  console.log(parsedBody);
  axios({
    method: 'POST',
    url: 'https://hookb.in/LggkYrpynXcWkkranyNX',
    data: {name: parsedBody.name},
  })
  .then( response => {
    callback(null, {
      statusCode: 200,
      body: 'Yes',
    }) 
  })
  .catch(err => {
    console.log(err);
    callback(new Error('Something went wrong'))
  })
  // let payload = 'data'
  //   axios.post('http://requestbin.net/r/du9pnq6v', payload)
  //   .then(res => res)
  //   .then(console.log('Sent'))
  //   .catch(err => {
  //     console.log(err);
  //     callback(new Error('Something is up'))
  //   });
  //   console.log(res)
  
  // callback(null, {
  //   statusCode: 200,
  //   body: 'Hello World',
  // })
} 

/* Import faunaDB sdk */
// const faunadb = require('faunadb')
// const q = faunadb.query

// /* export our lambda function as named "handler" export */
// exports.handler = async (event, context) => {
//   /* configure faunaDB Client with our secret */
//   const client = new faunadb.Client({
//     secret: process.env.FAUNA_SECRET_ KEY
//   })  
//   /* parse the string body into a useable JS object */
//   const data = JSON.parse(event.body)
//   // console.log('Function `todo-create` invoked', data)
//   const todoItem = {
//     data: data
//   }
  /* construct the fauna query */
  // return client.query(q.Create(q.Ref('classes/todos'), todoItem))
  //   .then((response) => {
  //     console.log('success', response)
  //     /* Success! return the response with statusCode 200 */
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(response)
  //     }
  //   }).catch((error) => {
  //     console.log('error', error)
  //     /* Error! return the error with statusCode 400 */
  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify(error)
  //     }
  //   })
// }