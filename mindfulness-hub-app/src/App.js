import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


// Pages
import MainPage from './pages/index';
import NotFoundPage from './pages/404';
import DailyWinsPage from './pages/DailyWins'
import AffirmationsPage from './pages/Affirmations'
import Navbar from './components/Navbar'

//Components


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/404"component={NotFoundPage}/>
        <Route exact path="/DailyWins" component={DailyWinsPage}/>
        <Route exact path="/Affirmations" component={AffirmationsPage}/>
        <Redirect to="/404"/> 
        </Switch>

    </Router>
  );
}

export default App;
