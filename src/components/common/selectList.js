"use strict";

var React = require('react');

var SelectList = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
    defaultOption: React.PropTypes.object,
    error: React.PropTypes.string
  },

  render: function() {
    var createMenuOption = function(option) {
      return (
        <option
          defaultValue={option}
          key={option}>
          {option}
        </option>
      );
    };

    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    var defaultOptionValue = "none";
    if (this.props.defaultOption) {
      defaultOptionValue = this.props.defaultOption.id;
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select name={this.props.name}
          className="form-control"
          id={this.props.name}
          onChange={this.props.onChange}
          value={defaultOptionValue}>
            <option value="none">Please select an option...</option>
            {this.props.options.map(createMenuOption, this)}
        </select>
        <div className="input">{this.props.error}</div>
      </div>
    );
  }
});

module.exports = SelectList;
