import React, { Component } from 'react';
import './App.css';
import Stopwatch from './stopwatch';
import { ENGINE_METHOD_DIGESTS } from 'constants';
import { safeHtml } from 'common-tags';

class App extends Component {
  state={
    status:false,
    runningtime:0
  }
  // handleClick=()=>{
  //   console.log('hi');
  //   this.setState({
  //     runningtime:5,
  //     status:true
  //   })
  // };
  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningtime;cd 
        this.timer = setInterval(() => {
          this.setState({ 
            runningtime: Date.now() - startTime 
          });
        });
      }
      return { status: !state.status };
      // status:!state.status;
    });
  };
  handleReset=()=>{
    clearInterval(this.timer); 
    this.setState({
      runningtime:0,
      status:false
    })
  };
  render() {
    return (
      <div className="App">
       <h1>Stopwatch</h1>
       <Stopwatch status={this.state.status}
         runningtime={this.state.runningtime}
         handleClick={this.handleClick}
         handleReset={this.handleReset}/>
      </div>
    );
  }
}

export default App;

// const call = setInterval(()=>{
//   console.log('call me')
// });

// call();


// In the handleClick() method first we are calculating the startTime which is no of milliseconds elapsed from jan 1,1970 till this moment.
// and then we are doing runningtime: Date.now() - startTime which results 0 first and displayed on page. But this step is excuted each millisecond 
// becuase no time interval is set in setInterval(). 
// so first we get 0 since Date.now() and startTime is same, 
// next time i.2 in first millisecond Date.now() increments 1 ms more than startTime which results in runningtime =1... this process continues 
// untill we press stop button 