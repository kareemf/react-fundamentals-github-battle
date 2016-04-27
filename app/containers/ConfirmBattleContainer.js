var React = require('react');
var ReactRouter = require('react-router');

var gitHubService = require('../services/gitHubService');
var ConfirmBattle = require('../components/ConfirmBattle');


var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    var query = this.props.location.query;
    gitHubService
      .getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        console.log('players', players);

        this.setState({
          isLoading: false,
          playersInfo: players
        });
      }.bind(this));
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playersInfo: []
    };
  },

  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle} />
    );
  }
});

module.exports = ConfirmBattleContainer;