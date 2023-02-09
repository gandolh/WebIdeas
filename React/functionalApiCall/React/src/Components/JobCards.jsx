import React, { Component } from "react";
import JobCard from "./JobCard";
class JobCards extends Component {
  getClassNames = (status) => {
    return "media " + status;
  };
  render() {
    //creating an array of JobCard component, which will present the
    // jobTitle, companyName and shortDesc;
    //also the status property is showing if the card is selected or not
    //and the onActive property is given recursively by App.js. It updates
    //the preview div and selected job from the list
    //and rendering it
    let cards = [];
    for (let i = 0; i < this.props.jobs.length; i++)
      cards.push(
        <li className={this.getClassNames(this.props.jobs[i].status)}>
          <JobCard
            key={i}
            jobs={this.props.jobs[i] || ""}
            onClickActive={this.props.onClickActive}
          ></JobCard>
        </li>
      );
    return <ul className="list-unstyled jobs">{cards}</ul>;
  }
}

export default JobCards;
