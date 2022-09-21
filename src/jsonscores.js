async function getTotalGoals(team, year) {
  // let goal1s = await getGoals(team, year,1, function(error,scores){console.log(scores)});
  // let goals2 = await getGoals(team, year,2, function(error,scores){console.log(scores)});
  const goalHome = await getGoals(team, year, 1);
  const goalAway = await getGoals(team, year, 2);
  console.log(goalHome+goalAway);
}

function getGoals(team, year, location){

  const https = require('https');
  const games = {
    hostname: 'jsonmock.hackerrank.com',
    path: '/api/football_matches?year='+year+'&team'+location+'='+team,
    port: 443,
    method: 'GET',
  };

  https.request(games, (res => {
    let info = ''
    //console.log(res.statusCode)
    // console.log(res.statusCode);
    res.on('data', chunk => {
      info+=chunk.toString();
    }).on('end', chunk =>{
      //console.log(info);
      let initialValue = 0;
      if(location == 1) {
        const scores = JSON.parse(info).data.map(game => game.team1goals).reduce(
          (previousValue, currentValue) => previousValue+ parseInt(currentValue,10),
          initialValue
        );
        console.log(scores);
        //callback(null, scores);
        return scores;
      } else {
        const scores = JSON.parse(info).data.map(game => game.team2goals).reduce(
          (previousValue, currentValue) => previousValue+ parseInt(currentValue, 10),
          initialValue
        );
        console.log(scores);
        //callback(null, scores);
        return scores;
      }
    })
  })).end();
}

getTotalGoals('Olympiacos', '2011').then();

