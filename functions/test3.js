exports.handler = async (event, context, callback) => {

  // const firestore = admin.firestore();
  // let data = JSON.parse(event.body);
  // let collection = await firestore.collection("Orders").doc(data.reference)
  // collection.set(data)
  // let collection = await firestore.collection("Orders");
  // let doc = collection.docs[0].ref;
  // doc = await doc.get();

  // console.log(doc.data());

  return callback(null, {
  statusCode: 200,
  // body: JSON.stringify(data)
  }) 
}

// const https = require('https')

// const options = {

//   hostname: 'api.paystack.co',

//   port: 443,

//   path: '/transaction/verify/:reference',

//   method: 'GET',

//   headers: {

//     Authorization: 'sk_test_47b9251f7c6f8988c1b0e045368bd50c3886cff8'

//   }

// }

// exports.handler = (event, context, callback) => {

//   https.request(options, res => {

//     let data = ''
  
//     res.on('data', (chunk) => {
  
//       data += chunk
  
//     });
  
//     res.on('end', () => {
//       // var body = Buffer.concat(chunks);
//       // console.log(data.toString());
//       console.log(JSON.parse(data))
  
//     })
  
//   }).on('error', error => {
  
//     console.error(error)
  
//   })

  // const viewPacked = JSON.parse(event.body)
  // return callback(null, {
  // statusCode: 200,
  // body: JSON.stringify({msg: viewPacked})
  // }) 
  // }

