import React, { Component } from "react";
class ActiveJob extends Component {
  //this is the preview component, here i display the active job data
  render() {
    return (
      <div className="w-100 p-3 text-white bg-dark previewJob">
        <img src="/logo192.png" alt="image" height="192" width="192" />
        <br></br>
        <h3>{this.props.job.jobTitle || " "}</h3>
        <p>{this.props.job.companyName || " "}</p>
        <p className="activeJobDesc">{this.props.job.shortDesc || " "}</p>
      </div>
    );
  }
}

export default ActiveJob;
