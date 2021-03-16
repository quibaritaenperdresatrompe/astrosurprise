import React from 'react';
import Nav from './Nav';
import Apod from './Apod';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Issloc from './Issloc';

function App() {
  // const [issLocatorClicked, setIssLocatorClicked] = useState(true);
  // const [apodClicked, setApodClicked] = useState(false);

  console.log(process.env.toto);

  return (
    <Router>
      <Nav />
      <Route path="/issLocator" component={Issloc} />
      <Route path="/apod" component={Apod} />
    </Router>
  );
}

export default App;
