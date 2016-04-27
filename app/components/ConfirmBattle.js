var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;

var styles = require('../styles/index');

var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function debug(obj) {
  return (<pre>{JSON.stringify(obj, null, ' ')}</pre>);
}

var ConfirmBattle = function(props) {
  var users = props.playersInfo.map((playerInfo, i) => {
    return (
      <UserDetailsWrapper key={playerInfo.id} header={`Player ${i + 1}`}>
        <UserDetails info={playerInfo} />
      </UserDetailsWrapper>
    );
  });

  return (
    props.isLoading ? <p>LOADING</p> :
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        {users}
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12">
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={props.onInitiateBattle}
            style={styles.space} >
            Initiate Battle!
          </button>
        </div>
        <div className="col-sm-12">
          <Link to="/playerOne">
            <button
              type="button"
              className="btn btn-lg btn-danger"
              style={styles.space} >
              Reselect Players
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

ConfirmBattle.propTyes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;
