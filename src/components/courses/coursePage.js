"use strict";

var React = require('react');
var Router = require('react-router');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');

var CoursesPage = React.createClass({
  getInitialState: function() {
    return {
      courses: CourseStore.getAllCourses()
    };
  },

  componentWillMount: function() {
    CourseStore.addChangeListener(this._onChange);
  },

  // Clean up when this component is unmounted
  componentWillUnmount: function() {
    CourseStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({courses: CourseStore.getAllCourses()});
  },

  render: function() {
    return (
      <div>
        <h1>Courses</h1>
      </div>
    );
  }
});

module.exports = CoursesPage;
