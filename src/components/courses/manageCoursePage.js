"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      course: { id: '', title: '', length: '', author: '', category: '' },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var courseId = this.props.params.id; // from the path '/course:id'

    if (courseId) {
      this.setState({course: CourseStore.getCourseById(courseId)});
    }
  },

  setCourseState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.course[field] = value;
    return this.setState({course: this.state.course});
  },

  courseFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous errors.

    this.setState({errors: this.state.errors});

    return formIsValid;
  },

  getAuthorById: function(id) {
    return AuthorStore.getAuthorById(id);
  },

  saveCourse: function(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    if (typeof this.state.course.author === "string") {
      this.state.course.author = this.getAuthorById(this.state.course.author);
    }

    if (this.state.course.id) {
      CourseActions.updateCourse(this.state.course);
    } else {
      CourseActions.createCourse(this.state.course);
    }

    this.setState({dirty: false});
    toastr.success('Course saved.');
    this.transitionTo('courses');
  },

  render: function() {
    return (
      <CourseForm
        course={this.state.course}
        onChange={this.setCourseState}
        onSave={this.saveCourse}
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageCoursePage;
