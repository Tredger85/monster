function getNumTransactions() {
  let jsonString;

  const https = require('https');

  const host = 'dummyjson.com';

  const findingId = {
    hostname: host,
    port: 443,
    // path: '/products/'+Id,
    path: '/products/search?q=phone',
    method: 'GET',
  };

  const req = https.request(findingId, (res => {
    let info = [];
    console.log('status code', res.statusCode);
    // console.log('header', res.headers);
    //console.log('data', JSON.parse(res.))
    // let data = '';
    // req.on('data', chunk => {
    //   data += chunk;
    // });
    res.on('data', chunk => {
      info.push(chunk)
      console.log(JSON.parse(JSON.stringify(chunk)));
    });
    console.log(info)
  }));

  req.end();


  // if (req.data === []){
  //   console.log( "User Name Not Found" );
  // } else {
  //   const findingTransactions = {
  //     hostname: host,
  //     path: '/api/transactions?&userId='+req.data.userId,
  //     method: 'GET',
  //   }
  //
  //   console.log (https.request(findingTransactions));
  // }


}


//getNumTransactions('epaga');

//getNumTransactions('jay');

// getNumTransactions(1)
// getNumTransactions(2)

getNumTransactions()
