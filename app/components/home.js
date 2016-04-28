var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainJumbotron = require('./MainJumbotron');

var Home = React.createClass({
  render: () => {
    return (
      <MainJumbotron>
        <h1>Github Battle</h1>
        <p className="lead"></p>
        <Link to='/playerOne'>
          <button type="button" className="btn btn-lg btn-success">
            Git Started
          </button>
        </Link>
      </MainJumbotron>
    );
  }
});

module.exports = Home;