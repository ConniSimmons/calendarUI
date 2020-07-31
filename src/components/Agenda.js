import React, { Component } from "react";
import moment from "moment";


export default class Agenda extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      current: [],
      past: [],
      future: [],
      

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
        //todo map dates in order
        this.setState({
          events: data,
        //   eventsList: data.map((item) => {
        //     return (
        //       <li key={item._id} id={item._id} >
        //         {item.title || "Unknown"}
        //         &nbsp;&nbsp;&nbsp;&nbsp;
             
        //         {`${moment(item.start).format("MMMM Do YYYY"
        //   )}`}
                
        //       </li>
        //     );
        //   }),
         
        });
      })
      .catch();
  };

  eventsList = () => this.state.events.map((item) => {
    return (
      <li key={item._id} id={item._id} >
        {item.title || "Unknown"}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {`${moment(item.start).format("MMMM Do YYYY"
  )}`}
        
      </li>
    );
  })

  pastEvent = (item) => {
      let currentDate = new Date();
      //let otherDate = item.start;

      let month = currentDate.getUTCMonth() + 1; //months from 1-12
      let day = currentDate.getUTCDate();
      let year = currentDate.getUTCFullYear();
      let newdate = year + "/" + month + "/" + day;
      let arrC = [...this.state.current]
      let arrP = [...this.state.past]
      let arrF = [...this.state.future]
      //currentDate.diff(otherDate, 'days') 
      /*trying to make a function to indicate a past event. We 
      know the way it's rendering is wrong right now, but at least 
      we can see what's going on. Eventually, we'll hide most of 
      the toolbar and then stick a link in there.*/
        this.state.events.map(event => {
            let startTime = new Date(event.start)
            if (year === startTime.getUTCFullYear()
            && month === startTime.getUTCMonth() + 1
            && day === startTime.getUTCDate() ){
               console.log("Date match: ", event.start) 
               arrC = [...arrC, event]
                
            }
        }) // end of map
        //consider let arrC = this.state.events.map . . . 
        return () => this.setState({current:arrC})
  }
  
  

  componentDidMount() {
    this.getEvents();
  }

  render() {
    let pastEvent2 = this.pastEvent()
    return (
      <div>
        <h4>AGENDA VIEW</h4>
      
        
        <div className="App">
          {/* <ul>{this.state.eventsList}</ul> */}
          <ul>{this.eventsList()}</ul>
          {/* <ul>{this.pastEvent}</ul> */}
          <ul>{pastEvent2}</ul>
        </div>
      </div>
    );
  }
}