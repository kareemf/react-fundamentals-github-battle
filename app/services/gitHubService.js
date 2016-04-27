var axios = require('axios');

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username)
}

var helpers = {
  getPlayersInfo: function(players) {
    var promises = players.map(function(username) {
      return getUserInfo(username);
    });

    return axios
      .all(promises)
      .then(function(resps){
        console.log('resps', resps);
        return resps.map(resp => resp.data)
      })
      .catch(function(err) {
        console.error('getPlayersInfo err', err);
      });
  }
};

module.exports = helpers;