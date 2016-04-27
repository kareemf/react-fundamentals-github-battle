var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// var User = require('../components/user');
function debug(obj) {
  return (<pre>{JSON.stringify(obj, null, ' ')}</pre>);
}
var ConfirmBattle = function(props) {
  return (
    <div>
      {debug(props)}
      <Link to="">
        <button type="button" className="btn btn-success btn-block col-sm-3">
          Initiate Battle!
        </button>
      </Link>
      <Link to="/playerOne">
        <button type="button" className="btn btn-success btn-block col-sm-3">
          Reselect Players
        </button>
      </Link>
    </div>
  );
}

module.exports = ConfirmBattle;
