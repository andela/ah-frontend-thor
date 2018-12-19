import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export const inputStyleDisplay = type => {
  if (type) {
    return "displayBlock";
  } else {
    return "displayNone";
  }
};
export class SearchForm extends Component {
  state = {
    searchData: "",
    type: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const type = this.state.type;
    const searchData = this.state.searchData;
    this.props.history.push(`/searchresults/${type}/${searchData}`);
  };

  setFormState = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitButton() {
    return (
      <div>
        <button type="submit" className="searchButton">
          <span className="search-word">Submit</span>
        </button>
      </div>
    );
  }
  inputForm() {
    return (
      <input
        type="text"
        placeholder="Search"
        onChange={this.onChange}
        value={this.state.searchData}
        id="searchData"
        className={inputStyleDisplay(this.state.type)}
        name="searchData"
      />
    );
  }
  render() {
    return (
      <div className="md-form my-1">
        <form onSubmit={this.onSubmit} className="form-inline">
          <div className="md-form my-1">
            <select
              className="type"
              id="type"
              name="type"
              onChange={this.setFormState}
              value={this.state.type}
            >
              <option>search</option>
              <option value="title">Article title</option>
              <option value="tags">Tag</option>
              <option value="author_name">Authors name</option>
            </select>
          </div>
          {this.inputForm()}
          {this.submitButton()}
        </form>
      </div>
    );
  }
}

export default withRouter(SearchForm);
