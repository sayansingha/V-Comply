import React, { Component } from 'react';
import axios from 'axios';
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: null,
      year:null,
      date:null,
      hour: null,
      minute:null,
      type:"once"
    };
  }
  
 
  render() {
    return (
      <div>
        <div className="once">
          <h1>Monthly</h1>
          <h3>Enter the year:</h3>
          <input type="text" onChange={(e) =>  { this.setState({year:e.target.value});}} />
          <h3>Enter the number of the month(1-12):</h3>
          <input type="text" onChange={(e) =>  { this.setState({month:e.target.value});}} />
          <h3>Enter the date of the month(1-31):</h3>
          <input type="text" onChange={(e) =>  { this.setState({date:e.target.value});}} />
          <input type="time" onChange={(e) =>  {let c = e.target.value; c=c.split(':'); this.setState({hour: c[0],minute:c[1]});}}/>
          <button type="submit" onClick={()=>{
            axios.post("http://localhost:4000/entry",{"year":this.state.year,"month":this.state.month,"date":this.state.date,"min":this.state.minute,"hour":this.state.hour,"type":this.state.type})
            .then(res => {
              console.log("data sent");
              console.log(res);
            })
            .catch(err=>{
              console.log(err);
            })
          }}>Submit Once</button>
        </div>
      </div>
    );
  }
}

