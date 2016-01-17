var React = require('react');
var Stream = require('./stream.jsx');
var Collection = require('./collection.jsx');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <Stream />
          </div>
          <div className="col-md-8 text-center">
            <Collection />
          </div>
        </div>
      </div>
    );
  }
});
