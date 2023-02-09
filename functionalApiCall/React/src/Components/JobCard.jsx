import React, { Component } from "react";
class JobCard extends Component {
  render() {
    //just showing the information for jobs(title,
    //company name and short desc).
    //It could be a function but i'm more into classes
    return (
      <div
        className="media-body"
        onClick={() => {
          this.props.onClickActive(this.props.jobs);
        }}
      >
        <h5 className="Title">{this.props.jobs.jobTitle}</h5>
        <p className="companyName">{this.props.jobs.companyName}</p>
        <p className="shortDesc">{this.props.jobs.shortDesc}</p>
      </div>
    );
  }
}

export default JobCard;
