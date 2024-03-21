import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import UserList from './UserList';
import StatisticPage from './StatisticPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
       
        <Route path="/users" component={UserList} />
        <Route path="/statistics" component={StatisticPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
