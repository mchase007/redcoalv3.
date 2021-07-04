const https = require('https')

const options = {

  hostname: 'api.paystack.co',

  port: 443,

  path: '/transaction/verify/:reference',

  method: 'GET',

  headers: {

    Authorization: 'sk_test_47b9251f7c6f8988c1b0e045368bd50c3886cff8'

  }

}

exports.handler = (event, context, callback) => {

  https.request(options, res => {

    let data = ''
  
    res.on('data', (chunk) => {
  
      data += chunk
  
    });
  
    res.on('end', () => {
  
      console.log(JSON.parse(data))
  
    })
  
  }).on('error', error => {
  
    console.error(error)
  
  })

  // const viewPacked = JSON.parse(event.body)
  return callback(null, {
  statusCode: 200,
  // body: JSON.stringify({msg: viewPacked})
  }) 
  }

