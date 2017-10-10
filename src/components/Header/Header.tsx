import * as React from 'react';

// You don't always want use the redux actions to cause navigation events.
// You can also just use the "NavLink" or other components from react-router-dom,
// which have the added benefit of just being "regular links".

// You should perhaps only dispatch navigation events when you want to programmatically
// cause navigation events, for instance after login is successful etc.
import { NavLink } from 'react-router-dom';

import './Header.css';

export interface Props {
  navigateHello?: () => void;
  navigateAbout?: () => void;
  navigateTopics?: () => void;
}

const Header = ({ navigateHello, navigateAbout}: Props) => (
  <div className="header">
    <div className="header-links">
      <NavLink exact={true} to="/" activeClassName="header-link-active">Hello</NavLink>
      <NavLink to="/about" activeClassName="header-link-active">About</NavLink>
      <NavLink to="/topics" activeClassName="header-link-active">Topics</NavLink>
    </div>
    <h3>Super magee netti sivu asia</h3>
    <button onClick={() => setTimeout(navigateHello, 2000)}>
      Hello (2s)
    </button>
    <button onClick={() => setTimeout(navigateAbout, 2000)}>
      About (2s)
    </button>
    <button onClick={() => setTimeout(navigateAbout, 2000)}>
      Topics (2s)
    </button>
  </div>
);

export default Header;
