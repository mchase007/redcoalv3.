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
  let collection = await firestore.collection("Orders").doc(data.reference)
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