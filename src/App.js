import React, { Component , Fragment} from 'react';




class App extends Component { 
render (){
  return (
    <Fragment>
      <header className="App-heade  r">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trabajo practico numero 1
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
    </Fragment>
  );
}
}

export default App;
