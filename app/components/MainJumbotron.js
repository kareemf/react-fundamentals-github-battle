var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;

var styles = require('../styles/index');

function MainJumbotron(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  );
}

module.exports = MainJumbotron;