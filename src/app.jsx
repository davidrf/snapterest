var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/application.jsx');
var WebAPIUtils = require('./utils/web_api_utils.jsx');

WebAPIUtils.initializeStreamOfTweets();

var reactComponent = ReactDOM.render(
  <Application />,
  document.getElementById('react-application')
);
