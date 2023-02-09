import React, { Component } from "react";

class Search extends Component {
  //used for matching the company name. OnChange event is used to
  // give data to App.js which will modify his state and update
  //the list of jobs to be displayed
  state = {};
  render() {
    return (
      <form className="form-inline">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Company name"
            aria-label="CompanyName"
            onChange={(event) => {
              this.props.onChangeMatchingCompanyName(event.target.value);
            }}
          />
        </div>
      </form>
    );
  }
}

export default Search;
