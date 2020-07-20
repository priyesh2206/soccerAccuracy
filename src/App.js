import React from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";


import './App.css';
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Login from './components/login';
import Signup from './components/signup';
import Developer from './components/dev';
import DashBoard from './components/dashboard';
import PlayerDetails from './components/playerdetails';
import AYATab from './components/TabsComponents/AYATab';
import CWOTab from './components/TabsComponents/CWOTab';
import WVDTab from './components/TabsComponents/WVDTab';
import CWITab from './components/TabsComponents/CWITab';
import AnlysisDashboard from './components/analysisDashboard';
// import DURTab from './components/TabsComponents/DURTab';





if(localStorage.getItem("isLoggedIn") == null){
  localStorage.setItem("isLoggedIn",false)
}

const getState=()=>{
  if(localStorage.getItem("isLoggedIn") === "false"){
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
       <Route  path="/"                     component={() => <DashBoard makeMelogin={this.makeMelogin}/> }/>
       <Route  path="/playerDetails"        component={() => <PlayerDetails makeMelogin={this.makeMelogin} isUserLoggedIn={this.state.isUserLoggedIn}/>}/>
       <Route  exact path="/login"          component={()=> <Login makeMelogin={this.makeMelogin}/>} />
       <Route  exact path="/signup"         component={()=> <Signup makeMelogin={this.makeMelogin}/> }  />
       <Route  exact path="/devops"          component={()=> <Developer makeMelogin={this.makeMelogin}/>} />
       <Route  exact path="/AnalysisDash"   component={AnlysisDashboard}/> 
       <Route  exact path="/AYATab"         component={AYATab}/>
       <Route  exact path="/CWOTab"         component={CWOTab}/> 
       <Route  exact path="/WVDTab"         component={WVDTab}/>
       <Route  exact path="/CWITab"         component={CWITab}/> 
      

    </div>
   
    </Router>
 
  );
}




}

export default App;
