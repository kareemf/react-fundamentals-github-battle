var React = require('react');

var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      username: ''
    };
  },

  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      // go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    }
    else {
      // go to playerTwo
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  },

  render: function() {
    return (
      <Prompt
        username={this.state.username}
        header={this.props.route.header}
        onUpdateUser={this.handleUpdateUser}
        onSubmitUser={this.handleSubmitUser} />
    );
  }
});

module.exports = PromptContainer;