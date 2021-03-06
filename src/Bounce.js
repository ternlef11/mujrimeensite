import React from 'react';
import './mujstyle.css';
import {
  Route,
  Switch,
  Link
} from "react-router-dom";
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import Video from './eggblack_sma.gif';

function Bounce() {
  return (
     <Route render={({location})=>(
        <TransitionGroup>
        <CSSTransition
        key={location.key}
        timeout={1000}
        classNames="fade">
        <Switch location={location}>
    <div className="projpages">
    <div className='eggcont'>
      <Link to="/">
          <div className='navicircle'>
            <img alt="egg_gif" className="theegggiff" src={Video}></img>
          </div>
        </Link>
    </div>
    <script src='randomsquares.js' language="JavaScript" type="text/javascript"></script>
  </div>
  </Switch>
          </CSSTransition></TransitionGroup>
          )}/>
  );
}

export default Bounce;
