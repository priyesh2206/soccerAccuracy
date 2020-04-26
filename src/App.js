import React from 'react'
import './App.css'
import DashBoard from './components/dashboard'
import { BrowserRouter as Router,Route,Link} from "react-router-dom"
import Login from './components/login'
import signup from './components/signup'
import PlayerDetails from './components/playerdetails'
import PlayerAccuracy from './components/playerAccuracy'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
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

render(){
  return(
    <Router>
      <div>
       <Route  path="/" component={DashBoard}/>
       <Route  exact path="/login" component={Login} />
       <Route  exact path="/signup" component={signup} />
       <Route  exact path="/playerDetails" component={PlayerDetails}/>
       <Route  exact path="/playerAccuracy" component={PlayerAccuracy}/> 
    </div>
    </Router> 
  );
}




}

export default App;
