import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode,setMode] = useState('light');//whther darkmode is enabled or not

  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{    //message and tpe are parameters that we are passing
    setAlert({
      msg:message,
      type:type
    })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-black');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }
  const toggleMode=(cls)=>
  {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
        if(Mode==='light')
    {
      setMode("black");
      document.body.style.backgroundColor="#2e4439";
      showAlert("Dark mode has enabled","Success");
      document.title="logic React App-dark mode";
      setInterval(() => {
        document.title=" mode is activated!!";
      },2000);
      setInterval(() => {
        document.title="Install now!!";
      },1600);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode has enabled","Success");
      document.title="logic React App-light mode";
     
    }
  }
  return (
    <>
      {/*<Navbar title="Textutils4" aboutText="About Us"></Navbar>*/}
      <Router>
      <Navbar title="Textutils4" mode={Mode} toggleMode={toggleMode}></Navbar>{/*here by default we are passing default props*/ }
      <Alert alert={alert}/>
      <div className="container my-3">

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}></Textform> 
          
          </Route>
      </Switch>

      
       
      </div> 
      </Router>
    </>
  );
}
export default App;
