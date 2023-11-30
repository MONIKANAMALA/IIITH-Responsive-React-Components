// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Reports from './Components/Reports';
import Charts from './Components/Charts';
import Feedback from './Components/Feedback';
import About from './Components/About';
import CombinedPage from './Components/CombinedPage';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={CombinedPage} /> 
          <Route path="/Home" exact component={Home} />
          <Route path="/Reports" component={Reports} />
          <Route path="/Charts" component={Charts} />
          <Route path="/About" exact component={About} />
          <Route path="/Feedback" component={Feedback} />
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
