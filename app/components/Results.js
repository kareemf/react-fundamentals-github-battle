var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;

var styles = require('../styles/index');

var MainJumbotron = require('./MainJumbotron');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function StartOver() {
  return (
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
  );
}

function Results(props) {
  var {scores, playersInfo} = props;

  var isATie = (scores[0] == scores[1]);
  var winningIndex = scores[0] >= scores[1] ? 0 : 1;

  var users = playersInfo.map((playerInfo, i) => {
    var text = isATie ? 'Draw' : (i == winningIndex ? 'Winner' : 'Loser');

    return (
      <UserDetailsWrapper key={playerInfo.id} header={`Player ${i + 1}: ${text}`}>
        <UserDetails score={scores[i]} info={playerInfo} />
      </UserDetailsWrapper>
    );
  });

  return (
    props.isLoading ? <p>LOADING</p> :
    <MainJumbotron>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        {users}
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <StartOver />
      </div>
    </MainJumbotron>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired,
};

module.exports = Results;