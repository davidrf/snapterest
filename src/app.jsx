var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/application.jsx');

var reactComponent = ReactDOM.render(
  <Application />,
  document.getElementById('react-application')
);
