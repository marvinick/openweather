var React = require('react');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-md-12  text-center" style={styles.transparentBg}>
      <h1>Enter City and State</h1>
      <div className="col-sm-12">
        <form>
          <div className="form-group">
            <input className="form-control" placeholder="city and state" type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-success" type="submit">Continue</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
});

module.exports = Home;
