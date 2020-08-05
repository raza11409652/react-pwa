import React  ,{Component} from 'react';
import Routes from '../src/routes/Routes'
import './App.css';

class App extends Component{

  render(){
    return(
      <div className="body-wrapper">
      <Routes name="App"/>
      </div>
    )
  }
}

export default App;
