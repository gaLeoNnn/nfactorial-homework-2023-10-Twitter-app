import './App.css';
import React from 'react';
import LeftSideMenu from './components /Left-Side_Menu/left-side-menu';
import MidHomeContent from './components /Mid-Home-Content/mid-home-content';

export default class App extends React.Component {

  render(){

    return(
      <div className="App d-flex mx-5">
        <LeftSideMenu />
        <div className='divider'></div>
        <MidHomeContent />
        <div className='divider'></div>
      </div>
    )
  }

}







