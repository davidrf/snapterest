var AppDispatcher = require('../dispatcher/app_dispatcher.jsx');

function receiveTweet(tweet) {
  var action = {
    type: 'receive_tweet',
    tweet: tweet
  };

  AppDispatcher.dispatch(action);
};

module.exports = {
  receiveTweet: receiveTweet
};
