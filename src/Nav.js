import React from 'react';

const Nav = ({ issLocatorClicked, apodClicked }) => {
  return (
    <nav className="bg-light-gray">
      <ul className="list pl0 flex items-center h3 ma0">
        <li className="w-80">
          <p className="f1 pl3 black">Astrosurprise 🚀</p>
        </li>
        <li className="w-20 flex justify-center">
          <p className="link dim mid-gray f2 center pointer" onClick={() => issLocatorClicked()}>
            Iss Locator
          </p>
        </li>
        <li className="w-20 flex justify-center">
          <p className="link dim mid-gray f2 center pointer" onClick={() => apodClicked()}>
            APOD
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
