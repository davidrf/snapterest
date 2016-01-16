jest.dontMock('../header');

describe('Header component', function() {
  it('renders provied header text', function() {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Header = require('../header');

    var header = TestUtils.renderIntoDocument(
      <Header text="Testing..." />
    );

    var actualHeaderText = ReactDOM.findDOMNode(header).textContent;
    expect(actualHeaderText).toBe('Testing...');

    var defaultHeader = TestUtils.renderIntoDocument(
      <Header />
    );

    var actualDefaultHeaderText = ReactDOM.findDOMNode(defaultHeader).textContent;
    expect(actualDefaultHeaderText).toBe('Default header');

  });
});
