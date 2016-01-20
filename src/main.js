"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');
var BootstrapJs = require('../node_modules/bootstrap/dist/js/bootstrap');

InitializeActions.initApp();

// Remember to redirect URLs to the index page, if using Router.HistoryLocation
// (setup server).
Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});
