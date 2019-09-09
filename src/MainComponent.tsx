import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginPage } from './Login';

interface MainProps{
  Name: string;
  Age: number;
}

interface MainState{

}

class MainComponent extends React.Component<MainProps, MainState>{
  constructor(prop: MainProps){
    super(prop);
  }

  render(){

    return <LoginPage/>;

    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {this.props.Name} : {this.props.Age} 
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
  }
}

export default MainComponent;
