var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/tweet_action_creators.jsx');

function initializeStreamOfTweets() {
  SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
  initializeStreamOfTweets: initializeStreamOfTweets
};
