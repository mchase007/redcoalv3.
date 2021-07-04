var admin = require("firebase-admin");

// var serviceAccount = require("../keys/serviceAccount.json");

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      privateKey: process.env.PRIVATE_KEY?.replace(/\\n/g, '/n'),
      clientEmail: process.env.CLIENT_EMAIL,
    })
  });
  
}


exports.handler = async (event, context, callback) => {

  const firestore = admin.firestore();
  let data = JSON.parse(event.body);
  let collection = await firestore.collection("Orders").doc("Incoming")
  collection.set(data)
  // let collection = await firestore.collection("Orders");
  // let doc = collection.docs[0].ref;
  // doc = await doc.get();

  // console.log(doc.data());

  return callback(null, {
  statusCode: 200,
  body: JSON.stringify(data)
  }) 
}

/* code from functions/todos-create.js */
// import faunadb from 'faunadb' /* Import faunaDB sdk */

/* configure faunaDB Client with our secret */
// const q = faunadb.query
// const client = new faunadb.Client({
  // secret: process.env.FAUNADB_SECRET
// })


// exports.handler = function(event, context, callback){
  // const { cart } = JSON.parse(event.body);
  // callback(null, {
  //   statusCode: 200,
  //   body: JSON.stringify({msg: 'Hello ' + cart})
  // });

  // const todoItem = {
    // data: data
  // }

  /* construct the fauna query */
  // return client.query(q.Create(q.Ref("classes/todos"), todoItem))
  // .then((response) => {
    // console.log("success", response)
    /* Success! return the response with statusCode 200 */
    // return callback(null, {
      // statusCode: 200,
      // body: JSON.stringify(response)
    // })
  // }).catch((error) => {
    // console.log("error", error)
    /* Error! return the error with statusCode 400 */
    // return callback(null, {
      // statusCode: 400,
      // body: JSON.stringify(error)
    // })
  // })
// }

// /* export our lambda function as named "handler" export */
// exports.handler = (event, context, callback) => {
//   /* parse the string body into a useable JS object */
//   const data = JSON.parse(event.body)
//   console.log("Function `todo-create` invoked", data)
// }