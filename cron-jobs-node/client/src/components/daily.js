import React, { Component } from 'react';
import axios from 'axios';
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: null,
      minute:null,
      type:"daily"
    };
  }
  
 
  render() {
    return (
      <div>
        <div className="daily">
          <h1>Daily</h1>
          <input type="time" onChange={(e) =>  {let c = e.target.value; c=c.split(':'); this.setState({hour: c[0],minute:c[1]});}} />
          <button type="submit" onClick={()=>{
            axios.post("http://localhost:4000/entry",{"hour":this.state.hour,"minute":this.state.minute,"type":this.state.type})
            .then(res => {
              console.log("data sent");
              console.log(res);
            })
            .catch(err=>{
              console.log(err);
            })
          }}>Submit Daily</button>
        </div>
      </div>
    );
  }
}

