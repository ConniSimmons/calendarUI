import React, { Component } from "react";
import moment from "moment";


export default class Agenda extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      eventsList: [],
      currentDate: new Date(),
      timeItem: "",
    };
  }
  getEvents = () => {
    // fetch('https://helio-calendar-api.herokuapp.com/api/events')
    fetch("http://localhost:5656/api/events")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data from api: ", data);
        this.setState({
          events: data,
          eventsList: data.map((item) => {
            return (
              <li key={item._id} id={item._id} >
                {item.title || "Unknown"}
                &nbsp;&nbsp;&nbsp;&nbsp;
             
                {`${moment(item.start).format("MMMM Do YYYY"
          )}`}
                
              </li>
            );
          }),
         
        });
      })
      .catch();
  };

  pastEvent = (item) => {
      let currentDate = moment();
      let otherDate = item.start;
      currentDate.diff(otherDate, 'days') 
      /*trying to make a function to indicate a past event. We 
      know the way it's rendering is wrong right now, but at least 
      we can see what's going on. Eventually, we'll hide most of 
      the toolbar and then stick a link in there.*/
  }
  
  return;

  componentDidMount() {
    this.getEvents();
  }

  render() {
    
    return (
      <div>
        <h4>AGENDA VIEW</h4>
      
        
        <div className="App">
          <ul>{this.state.eventsList}</ul>
          
        </div>
      </div>
    );
  }
}