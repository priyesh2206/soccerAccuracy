import React from 'react'
import './App.css'
import DashBoard from './components/dashboard'
import { BrowserRouter as Router,Route,Link} from "react-router-dom"
import Login from './components/login'
import signup from './components/signup'

class App extends React.Component{

render(){
  return(
    <Router>
      <div>
       <Route  path="/" component={DashBoard}/>
       <Route  exact path="/login" component={Login} />
       <Route  exact path="/signup" component={signup} />

    </div>
    </Router> 
  );
}




}

export default App;
