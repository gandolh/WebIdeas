import React, { Component } from "react";
import JobCards from "./Components/JobCards";
import NavBar from "./Components/NavBar";
import ActiveJob from "./Components/ActiveJob";
import Search from "./Components/Search";
import "./App.css";
import "./responsive.css";
const request = require("request");

class App extends Component {
  state = {
    jobs: [],
    showOption: "first10",
    activeJob: {},
    matchingCompanyName: "",
  };
  constructor() {
    super();
    //the POST call json body
    let searchingData = {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    };
    //I did this because the scope of request interference with *this* class scope
    let handleUpdateJobsList = this.handleUpdateJobsList;
    //fetching the data from API with the request module
    //also i can use fetch api from vanilla if you prefer it
    request.post(
      { url: "https://www.zippia.com/api/jobs/", json: searchingData },
      function (err, httpResponse, body) {
        //returning an error message in case of error
        if (err) {
          return console.error("upload failed:", err);
        }
        //getting the response and handling the data gotten
        handleUpdateJobsList(body.jobs, body.totalJobs);
      }
    );
  }
  handleUpdateJobsList = (jobs, totalJobs) => {
    //updating the state with the jobs list
    //and setting the active job for preview element
    this.setState({
      jobs,
      totalJobs,
      activeJob: {
        jobTitle: jobs[0].jobTitle,
        companyName: jobs[0].companyName,
        shortDesc: jobs[0].shortDesc,
      },
    });
  };

  handleClickActive = (el) => {
    //seting the element clicked as activeJob
    this.setState({ activeJob: el });
  };
  handleChangeShowOption = () => {
    //switching them to get a proper use of "this week" button
    //i made this so simple cause we've got only 2 cases:D
    if (this.state.showOption === "first10")
      this.setState({ showOption: "firstWeek" });
    else this.setState({ showOption: "first10" });
  };

  handleChangeMatchingCompanyName = (compName) => {
    //updating the state atribute for matching the company name
    //this function is called by the input type="text"

    this.setState({
      matchingCompanyName: compName,
    });
  };
  getButtonClasses = () => {
    //switching the color for "this week button" to visually see if it is
    //active or not
    let classes = "btn thisWeekBtn ";
    if (this.state.showOption === "firstWeek") classes += "btn-primary";
    else classes += "btn-light";

    return classes;
  };
  render() {
    let JTBD; //jobsToBeDisplayed
    let JTBDFOO = []; //temporary array to get only the keys we need
    //selecting what sorting algorithm for data we need

    JTBD = [...this.state.jobs]; //picking all elements in JTBD

    if (this.state.showOption === "firstWeek") {
      //picking just the jobs from the last week
      //if the option is checked
      let filtered = this.state.jobs.filter(
        (el) => parseInt(el.postedDate) < 7
      );
      JTBD = [...filtered];
    }
    // searching for the matching company name
    //also matching for every substring from its name
    JTBD = JTBD.filter((el) =>
      el.companyName
        .toLowerCase()
        .includes(this.state.matchingCompanyName.toLowerCase())
    );
    //geting only 10 of them
    JTBD = JTBD.slice(0, 10);
    //geting in the temporary array only the key values we need for the
    //job cards and overwritting the JTBD after that.
    for (let el of JTBD) {
      JTBDFOO.push({
        jobTitle: el.jobTitle,
        companyName: el.companyName,
        shortDesc: el.shortDesc,
        status: "",
      });
    }
    JTBD = JTBDFOO;
    // searching for the active element in the list of jobs
    let activeIndex = 0;
    let el = this.state.activeJob;
    for (let i = 0; i < JTBD.length; i++) {
      let job = JTBD[i];
      if (
        job.jobTitle == el.jobTitle &&
        job.companyName == el.companyName &&
        job.shortDesc == el.shortDesc
      )
        activeIndex = i;
    }
    if (JTBD.length != 0) JTBD[activeIndex].status = "active";

    /*
    ok so the exhaustive dom tree is:
     fullPage which represent the full page, that guarantee that i dont exceed the 100vh limit
    Navbar - the component for the navigation bar, static and simple
    Container - responsive bootstrap class, mainly used for margins in case of curved screens
    main - a display flex container which take care of proper view for jobslist and preview
    jobsMenu for the 2 important buttons and the list of jobs retrieved from the api
    there is a div under jobsMenu used for displaying inline search and this week buttons
    and an ul with a bunch of generated li. they got className's from bootstrap
    The final dom element is the preview element which retrieve data from App.js
    through this.state.activeJob and show them:D
    Important components are:
    ActiveJob which is the preview elem
    JobCards which is the showcase for a bunch of JobCard components
    Navbar- static basic
    Search - for the magnifique searching area
    */
    return (
      <div className="fullPage">
        <NavBar />{" "}
        <div className="container">
          <div className="main">
            <div className="jobsMenu">
              <div className="d-flex">
                <Search
                  onChangeMatchingCompanyName={
                    this.handleChangeMatchingCompanyName
                  }
                />
                <button
                  className={this.getButtonClasses()}
                  onClick={(props) => {
                    this.handleChangeShowOption();
                  }}
                >
                  this week
                </button>
              </div>
              <JobCards jobs={JTBD} onClickActive={this.handleClickActive} />
            </div>

            {/*a component made for the entire jobCards menu*/}
            <ActiveJob job={this.state.activeJob} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
