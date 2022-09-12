function getNumTransactions(username) {
  const https = require('https');

  const host = 'jsonmock.hackerrank.com';

  const findingId = {
    hostname: host,
    path: '/api/article_users?username='+username,
    method: 'GET',
  };

  const req = https.request(findingId);

  if (req.data === []){
    console.log( "User Name Not Found" );
  } else {
    const findingTransactions = {
      hostname: host,
      path: '/api/transactions?&userId='+req.data.userId,
      method: 'GET',
    }

    console.log (https.request(findingTransactions));
  }
  req.end();
}


getNumTransactions('epaga');

getNumTransactions('jay');
