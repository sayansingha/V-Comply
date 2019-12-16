import React, { Component } from 'react';
import axios from 'axios';
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: null,
      hour: null,
      minute:null,
      type:"weekly"
    };
  }
  
 
  render() {
    return (
      <div>
        <div className="weekly">
          <h1>Weekly</h1>
          <h3>Enter the number of the day in the week(0-7(0 and 7 both are Sundays)):</h3>
          <input type="text" onChange={(e) =>  { this.setState({day:e.target.value});}} />
          <input type="time" onChange={(e) =>  {let c = e.target.value; c=c.split(':'); this.setState({hour: c[0],minute:c[1]});}}/>
          <button type="submit" onClick={()=>{
            axios.post("http://localhost:4000/entry",{"day":this.state.day,"min":this.state.minute,"hour":this.state.hour,"type":this.state.type})
            .then(res => {
              console.log("data sent");
              console.log(res);
            })
            .catch(err=>{
              console.log(err);
            })
          }}>Submit Weekly</button>
        </div>
      </div>
    );
  }
}

