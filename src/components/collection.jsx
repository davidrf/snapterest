var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./collection_controls.jsx');
var TweetList = require('./tweet_list.jsx');
var Header = require('./header.jsx');
var CollectionUtils = require('../utils/collection_utils');
var CollectionStore = require('../stores/collection_store.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      collectionTweets: CollectionStore.getCollectionTweets()
    };
  },

  componentDidMount: function() {
    CollectionStore.addChangeListener(this.onCollectionChange)
  },

  componentWillUnmound: function() {
    CollectionStore.removeChangeListener(this.onCollectionChange)
  },

  onCollectionChange: function() {
    this.setState({
      collectionTweets: CollectionStore.getCollectionTweets()
    });
  },

  createHtmlMarkupStringOfTweetList: function() {
    var collectionTweets = this.state.collectionTweets;
    var htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={collectionTweets} />
    );
    var htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  },

  getListOfTweetIds: function() {
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweetsInCollection: function() {
    return this.getListOfTweetIds().length;
  },

  render: function() {
    var collectionTweets = this.state.collectionTweets;
    var numberOfTweetsInCollection = CollectionUtils.getNumberOfTweetsInCollection(collectionTweets);
    var htmlMarkup;

    if (numberOfTweetsInCollection > 0) {
      htmlMarkup = this.createHtmlMarkupStringOfTweetList();

      return(
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
          />
          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return <Header text="Your collection is empty" />;
  }
});
