var admin = require("firebase-admin");

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.PROJECT_ID,
      privateKey: process.env.PRIVATE_KEY.split("\\n").join("\n"),
      clientEmail: process.env.CLIENT_EMAIL,
    }
      )
  });
  
}

exports.handler = async (event, context, callback) => {
  
  const firestore = admin.firestore();
  let data = JSON.parse(event.body);
  let collection = await firestore.collection("Contact Form")
  collection.add(data)

  return callback(null, {
  statusCode: 200,
  body: JSON.stringify(data.num)
  }) 
  }

// exports.handler = (event, context, callback) => {
//   /* parse the string body into a useable JS object */
//   const data = JSON.parse(event.body)
//   console.log("Function `todo-create` invoked", data)
// }