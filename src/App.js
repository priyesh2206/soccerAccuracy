import React from 'react'
import './App.css'
import DashBoard from './components/dashboard'
import { BrowserRouter as Router,Route,Switch,Redirect, BrowserRouter} from "react-router-dom"
import Login from './components/login'
import Signup from './components/signup'
import PlayerDetails from './components/playerdetails'
import AnlysisDashboard from './components/analysisDashboard'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.min.css';
import "mdbreact/dist/css/mdb.css";



if(localStorage.getItem("isLoggedIn") == null){
  localStorage.setItem("isLoggedIn",false)
}

const getState=()=>{
  if(localStorage.getItem("isLoggedIn") == "false"){
    return false;
  }
  else{
    return true;
  }
}

const initialState={
  isUserLoggedIn:getState()
}



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = initialState

  }
  makeMelogin=()=>{
    this.setState({isUserLoggedIn:getState()})
  }
 

render(){
  return(
   <Router>
      <div>
       <Route  path="/" component={() => <DashBoard makeMelogin={this.makeMelogin}/> }/>
       <Route  exact path="/login" component={()=> <Login makeMelogin={this.makeMelogin}/>} />
       <Route  exact path="/signup" component={()=> <Signup makeMelogin={this.makeMelogin}/> }  />
       <Route  path="/playerDetails" component={() => <PlayerDetails makeMelogin={this.makeMelogin} isUserLoggedIn={this.state.isUserLoggedIn}/>}/>
       <Route  exact path="/AnlysisDash" component={AnlysisDashboard}/> 
    </div>
   
    </Router>
 
  );
}




}

export default App;
