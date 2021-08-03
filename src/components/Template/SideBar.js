import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ayush Sharma</h2>
        <p><a href="mailto:sharmaayush20999@gmail.com">sharmaayush20999@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ayush. I like building things.
        I am a pursuing Bachelors&apos;s in Computer Science & Engineering
        from Guru Gobind Singh Indraprastha University
        I love to explore new technologies and leverage them to solve real-life problems
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ayush&apos;Sharma <Link to="/">ayushshrma.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
