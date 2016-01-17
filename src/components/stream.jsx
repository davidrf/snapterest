var React = require('react');
var StreamTweet = require('./stream_tweet.jsx');
var Header = require('./header.jsx');
var TweetStore = require('../stores/tweet_store.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      tweet: TweetStore.getTweet()
    }
  },

  componentDidMount: function() {
    TweetStore.addChangeListener(this.onTweetChange);
  },

  componentWillUnmount: function() {
    TweetStore.removeChangeListener(this.onTweetChange);
  },

  onTweetChange: function() {
    this.setState({
      tweet: TweetStore.getTweet()
    });
  },

  render: function() {
    var tweet = this.state.tweet;

    if (tweet) {
      return(<StreamTweet tweet={tweet} />);
    }

    return (
      <Header text="Waiting for public photos from Twitter.." />
    );
  }
});
