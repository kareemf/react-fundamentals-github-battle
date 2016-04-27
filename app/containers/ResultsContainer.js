var React = require('react');

var Results = require('../components/Results')
var githubService = require('../services/githubService')

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    };
  },

  componentDidMount: function () {
    var playersInfo = this.props.location.state.playersInfo;

    githubService
      .battle(playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        });
      }.bind(this));
  },

  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        scores={this.state.scores} />
    );
  }

});

module.exports = ResultsContainer;