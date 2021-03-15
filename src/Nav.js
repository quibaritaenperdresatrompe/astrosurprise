import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  useEffect(() => {
    let linksEventActivated = false;
    const links = document.querySelectorAll('nav > a');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    burger.addEventListener('click', () => {
      //toggle nav
      nav.classList.toggle('nav-active');
      //toggle links

      links.forEach((link, index) => {
        if (link.style.animation) {
          console.log('deactivate animation on links');
          link.style.animation = '';
        } else {
          console.log('activate animation on links');
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
        }
      });
      //burger animation
      burger.classList.toggle('toggle');

      if (!linksEventActivated) {
        linksEventActivated = true; //Checks if event already attached to links in navbar
        links.forEach((link) =>
          link.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
            links.forEach((link, index) => {
              if (link.style.animation) {
                console.log('deactivate animation on links');
                link.style.animation = '';
              } else {
                console.log('activate animation on links');
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3 + 0.5}s`;
              }
            });
          }),
        );
      }
    });
  }, []);

  return (
    <div id="topBar">
      <h1 id="topTitle">Astrosurprise 🚀</h1>
      <nav className="">
        <Link to="/issLocator">Where is the ISS ?</Link>
        <Link to="/apod">Picture of the day</Link>
      </nav>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {}
    </div>
  );
};

export default Nav;
