import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList'; // Import your UserList component
import StatisticPage from './StatisticPage'; // Import other components as needed
import Navbar from './Navbar'
import Footer from './footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/web-impact" component={UserList} />
        <Route path="/web-impact/users" component={UserList} />
        <Route path="/web-impact/statistics" component={StatisticPage} />
        
       
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
