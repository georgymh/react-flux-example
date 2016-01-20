"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.createClass({
  propTypes: {
    courses: React.PropTypes.array.isRequired
  },

  watchCourse: function(id) {
    event.preventDefault();
    toastr.info('Feature coming soon!');
  },

  deleteCourse: function(id) {
    event.preventDefault();
    CourseActions.deleteCourse(id);
    toastr.success("Course Deleted");
  },

  render: function() {
    var createCourseRow = function(course) {
      return (
        <tr key={course.id}>
          <td><a href="#" onClick={this.watchCourse.bind(this, course.id)}>Watch</a></td>
          <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
          <td><Link to="manageCourse" params={{id: course.id}}>{course.id}</Link></td>
          <td>{course.title}</td>
          <td><Link to="manageAuthor" params={{id: course.author.id}}>{course.author.id}</Link></td>
          <td>{course.length}</td>
          <td>{course.category}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th></th>
            <th></th>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Length</th>
            <th>Category</th>
          </thead>
          <tbody>
            {this.props.courses.map(createCourseRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = CourseList;
