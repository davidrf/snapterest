var React = require('react');
var Header = require('./header.jsx');
var Button = require('./button.jsx');
var CollectionRenameForm = require('./collection_rename_form.jsx');
var CollectionExportForm = require('./collection_export_form.jsx');
var CollectionActionCreators = require('../actions/collection_action_creator.jsx');
var CollectionStore = require('../stores/collection_store.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      isEditingName: false
    };
  },

  getHeaderText: function() {
    var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
    var text = numberOfTweetsInCollection;
    var name = CollectionStore.getCollectionName();

    if (numberOfTweetsInCollection === 1) {
      text = text + ' tweet in your';
    } else {
      text = text + ' tweets in your';
    }

    return(
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  },

  toggleEditCollectionName: function() {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  },

  removeAllTweetsFromCollection: function() {
    CollectionActionCreators.removeAllTweetsFromCollection();
  },

  render: function() {
    if(this.state.isEditingName) {
      return(
        <CollectionRenameForm
          onCancelCollectionNameChange={this.toggleEditCollectionName}
        />
      );
    }

    return(
      <div>
        <Header text={this.getHeaderText()} />
        <Button
          label="Rename collection"
          handleClick={this.toggleEditCollectionName} />

        <Button label="Empty collection"
          handleClick={this.removeAllTweetsFromCollection} />

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }
});
