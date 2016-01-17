var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header.jsx');
var Button = require('./button.jsx');
var CollectionActionCreators = require('../actions/collection_action_creator.jsx');
var CollectionStore = require('../stores/collection_store.jsx');

var inputStyle = {
  marginRight: '5px'
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      inputValue: CollectionStore.getCollectionName()
    };
  },

  setInputValue: function(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  },

  handleInputValueChange: function(event) {
    var inputValue = event.target.value;
    this.setInputValue(inputValue);
  },

  handleFormSubmit: function(event) {
    event.preventDefault();

    var collectionName = this.state.inputValue;
    CollectionActionCreators.setCollectionName(collectionName);
    this.props.onCancelCollectionNameChange();
  },

  handleFormCancel: function(event) {
    event.preventDefault();

    var collectionName = CollectionStore.getCollectionName();
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  },

  componentDidMount: function() {
    this.refs.collectionName.focus();
  },

  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleFormSubmit}>
        <Header text="Collection name:" />
        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref="collectionName" />
        </div>

        <Button label="Change" handleClick={this.handleFormSubmit} />
        <Button label="Cancel" handleClick={this.handleFormCancel} />
      </form>
    );
  }
});
