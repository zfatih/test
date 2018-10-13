import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Lige from './components/Lige'
import Liga from './components/Liga'
import Tim from './components/Tim'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Route path="/About" component={About}/>
          <Route exact path="/Lige" component={Lige}/>
          <Route path="/Lige/:league_id" component={Liga}/>
          <Route path="/Timovi/:team_name" component={Tim}/>
          <Route exact path="/" component={Home}/> 
        </div>  
      </BrowserRouter>
    );
  }
}

export default App;
