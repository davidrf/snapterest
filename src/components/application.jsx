var React = require('react');
var Stream = require('./stream.jsx');
// var Collection = require('./collection.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      collectionTweets: {}
    };
  },
  addTweetToCollection: function(tweet) {
    var collectionTweets = this.state.collectionTweets;
    collectionTweets[tweet.id] = tweet;
    this.setState({
      collectionTweets: collectionTweets
    });
  },
  removeTweetFromCollection: function(tweet) {
    var collectionTweets = this.state.collectionTweets;
    delete collectionTweets[tweet.id];
    this.setState({
      collectionTweets: collectionTweets
    });
  },
  removeAllTweetsFromCollection: function() {
    this.setState({
      collectionTweets: {}
    });
  },
  render: function() {
    return(
      <div className="row">
        <div className="col-md-4 text-center">
          <Stream onAddTweetToCollection={this.addTweetToCollection} />
        </div>
        <div className="col-md-8 text-center">
        </div>
      </div>
    );
  }
});
// <Collection
  // tweets={this.state.collectionTweets}
  // onRemoveTweetFromCollection={this.removeTweetFromCollection}
  // onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection}
// />
