// function getNumTransactions(ID){
//   getNumTransactions(function (error,price){console.log(price)});
// }


function getNumTransactions(callback) {
  const https = require('https');

  const host = 'dummyjson.com';

  const findingId = {
    hostname: host,
    port: 443,
    //path: '/products/'+Id,
    path: '/products',
    method: 'GET',
  };

  https.request(findingId, ( res => {
    let info = '';
    console.log('status code', res.statusCode);
    res.on('data', chunk => {
      info+=chunk.toString();
    }).on('end', listener =>{
      console.log(info);

      let initialValue = 0;
      const parsed = JSON.parse(info).products.map(products => products.price).reduce(
        (previousValue, currentValue) => previousValue + parseInt(currentValue, 10),
        initialValue
      );
      callback(null, parsed);
      // console.log(parsed);
      // jsonString += 'inside' + parsed;
      // console.log(jsonString);
    });
  })).end();

  // console.log( jsonString);

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


//getNumTransactions(2)

//getNumTransactions()
