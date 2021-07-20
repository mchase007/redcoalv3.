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
  const orderList = firestore.collection('Orders');
  const snapshot = await orderList.get();
  
  const data = snapshot.docs.map(doc => doc.data());

  return callback(null, {
  statusCode: 200,
  body: JSON.stringify(data)
  }) 
}