"use strict";

var React = require('react');
var Input = require('../common/textInput');
var SelectList = require('../common/selectList');
var AuthorStore = require('../../stores/authorStore');

var CourseForm = React.createClass({
  propTypes: {
    course: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  getArrayOfAuthorIds: function() {
    var authorArray = [];
    var authors = AuthorStore.getAllAuthors();
    for (var i = 0; i < authors.length; i++) {
      authorArray.push(authors[i].id);
    }

    return authorArray;
  },

  render: function() {
    return (
      <form>
        <h1>Manage Course</h1>

        <Input
          name="title"
          label="Course Title"
          value={this.props.course.title}
          onChange={this.props.onChange}
          error={this.props.errors.title} />

        <SelectList
          name="author"
          label="Author"
          options={this.getArrayOfAuthorIds()}
          defaultOption={this.props.course.author}
          onChange={this.props.onChange}
          error={this.props.errors.author} />

        <Input
          name="length"
          label="Video Length"
          value={this.props.course.length}
          onChange={this.props.onChange}
          error={this.props.errors.length} />

        <Input
          name="category"
          label="Category"
          value={this.props.course.category}
          onChange={this.props.onChange}
          error={this.props.errors.category} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = CourseForm;
