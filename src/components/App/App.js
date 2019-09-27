import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';
import Admin from '../Admin/Admin';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <Route exact path='/' component={Home}></Route>
          <Route path='/feeling' component={Feeling}></Route>
          <Route path='/understanding' component={Understanding}></Route>
          <Route path='/support' component={Support}></Route>
          <Route path='/comments' component={Comments}></Route>
          <Route path='/review' component={Review}></Route>
          <Route path='/submit' component={Submit}></Route>
          <Route path='/admin' component={Admin}></Route>
          <br />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapStateToProps)(App);
