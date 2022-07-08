import React,{ Component } from 'react'; 
import './App.css'; 
 
 
class App extends Component { 
  constructor(){ 
    super() 
    this.state={ 
      date : new Date() 
    } 
  } 
  time(){ 
    setTimeout(()=>{ 
      this.setState({date: new Date()}) 
    },1000) 
  } 
  render(){ 
    return ( 
      <div className="App"> 
        <h1>Hello User</h1> 
        <h3>It is {this.state.date.toLocaleTimeString()} </h3> 
        {this.time()} 
      </div> 
    ); 
  } 
} 
export default App;

export default App;
