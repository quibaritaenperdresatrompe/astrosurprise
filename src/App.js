import React from 'react';
import Nav from './Nav';
import Apod from './Apod';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Issloc from './Issloc';

function App() {
  // const [issLocatorClicked, setIssLocatorClicked] = useState(true);
  // const [apodClicked, setApodClicked] = useState(false);
  const apiKey = 'LaFmYA6sQJbseJlR2u8YU7N4zV8a5dgaoIaBs15r';

  return (
    <div>
      <Router>
        <Nav />
        <Route path="/issLocator">
          <Issloc />
        </Route>
        <Route path="/apod">
          <Apod apiKey={apiKey} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
