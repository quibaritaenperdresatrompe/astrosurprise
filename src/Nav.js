import React from 'react';

const Nav = ({ issLocatorClicked, apodClicked }) => {
  return (
    <div className="flex flex-row-ns flex-column bg-light-gray h3-ns h5">
      <p className="f1-ns f2 pl3 black w-75-ns avenir self-center">Astrosurprise 🚀</p>
      <nav className="flex flex-row-ns flex-column content-center  w-25-ns">
        <p className="link dim mid-gray f2 center pointer ma0 ma2-ns self-center avenir" onClick={() => issLocatorClicked()}>
          Iss Locator
        </p>
        <p className="link dim mid-gray f2 center pointer ma0 ma2-ns self-center avenir" onClick={() => apodClicked()}>
          APOD
        </p>
      </nav>
    </div>
  );
};

export default Nav;
