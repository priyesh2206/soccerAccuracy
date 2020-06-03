import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import './AYATab.css';
import {Line} from 'react-chartjs-2'

const Graph = (props) =>{
  return(
      <div>
      <Line 
      options={{
          responsive:true,
      
      }}
      data = {{
          labels:["10","20","30","40","50","60","70","80","90","100"],
          datasets:[
          {
              label:"Goal Accuracy",
              backgroundColor:"rgba(255,0,255,0.75)",
              data:[props.goals]
          },
           {
               label:"Tackles Accuracy",
               backgroundColor:"rgba(255,255,15,0.75)",
               data:[props.tackels]
          }
        ]
      }}  
      />
      </div>
  )
}



const DropDownTabs = (props) =>{
     return (
        <div className="tabsAYA">
            <Tab.Container  defaultActiveKey="allAccuracy">
                <DropdownButton  title="Accuracy!"> 
                <Dropdown.Item action eventKey="allAccuracy">All Accuracy</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item action eventKey="gAccuracy">Goals Accuracy</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="tAccuracy">Tackles Accuracy </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="pAccuracy">Passes Accuracy</Dropdown.Item>
                </DropdownButton>
                <Tab.Content>
                    <Tab.Pane eventKey="allAccuracy">
                      <Graph goals = {props.Goal} tackels = {props.Tackles}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="gAccuracy">
                        <h1>Goal Accuracy</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tAccuracy">
                        <h1>Tackle Accuracy</h1>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pAccuracy">
                        <h1>passes Accuracy</h1>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
     );
}


class AYATab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teamname:'',
            goalWon:'',
            goalAttmp:'',
            tackleWon:'',
            tackleAttmp:'',
            passesWon:'',
            passesAttmp:'',
            GoalAccuracy:'',
            TackleAccuracy:'',
            PassesAccuracy:'', 
        }
   
    }

    getFormattedDate=(date)=>{
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return  day + '-' + month + '-' + year;
      }
  
  
    componentDidMount(){
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn){
            const date = new Date(localStorage.getItem('AYAmatchdate'))
            const finalDate = this.getFormattedDate(date); 
            console.log(finalDate)
         fetch(`http://localhost:5000/api/users/${localStorage.getItem('AYAplayername')}/${finalDate}`).then(data=>{
             return data.json()
         }).then(data=>{
            //   console.log(data)
              this.setState({
                            teamname:data.teamname,
                            goalWon:data.goalWon,goalAttmp:data.goalAttmp,
                            tackleWon:data.tackleWon,tackleAttmp:data.tackleAttmp,
                            passesWon:data.passesWon,passesAttmp:data.passesAttmp
                          })
               const gw  = this.state.goalWon;
               const gA =  this.state.goalAttmp;
               const GoalAcc =  (gw/gA)*100;
               const tw = this.state.tackleWon;
               const tA  = this.state.tackleAttmp;
               const TacklesAcc = (tw/tA)*100;
               const pw = this.state.passesWon;
               const pA = this.state.passesWon;
               const PassesAcc = (pw/pA)*100;
               this.setState({GoalAccuracy:GoalAcc,TackleAccuracy:TacklesAcc,PassesAccuracy:PassesAcc});
         })
        }
    }

    render(){
        const name = localStorage.getItem('AYAplayername');
        const matchdate = localStorage.getItem('AYAmatchdate')
        return(
        <div>
             <div> 
             <Col  md={4}>
                <Row md={4}>
                    <Breadcrumb  className="breadAYA">
                       <Breadcrumb.Item href ="/AnalysisDash" >Dashboard</Breadcrumb.Item>
                       <Breadcrumb.Item active>AYA TAB</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
            </Col>
            </div>
            {/* Card of user */}
            <div>
            <Tab.Container  defaultActiveKey="userCard">
             <Row>
                <Col sm={3}>
                    <Card  border="dark" className="CardBodyAYATab">
                    <Card.Header><h5 className="HeaderAYA">Player Details{' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                    <Card.Body >
                    <Card.Title className="tittleAYA">{name}</Card.Title>
                    <Card.Subtitle className="subtittleAYA">{this.state.teamname}</Card.Subtitle>  
                    <Card.Text>
                    <p className="MDateAYA">Match Date:-{matchdate}</p>
                        {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                <Accordion className ="AccordionGoalAYA">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="green" eventKey="0">
                                        Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        GOALS WONS :&nbsp;&nbsp;{this.state.goalWon}<br></br>
                                        <br></br>
                                        GOALS ATTEMPTED:&nbsp;&nbsp;{this.state.goalAttmp}
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                 </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}

                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}

                                <Accordion className ="AccordionGoalAYA">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="green" eventKey="0">
                                        TACKLES&nbsp;<i class="fas fa-running"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        TACKLES WONS :&nbsp;&nbsp;{this.state.tackleWon}<br></br>
                                        <br></br>
                                        TACKLES ATTEMPTED:&nbsp;&nbsp;{this.state.tackleAttmp}
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}
                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}

                                <Accordion className ="AccordionGoalAYA">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="green" eventKey="0">
                                        Passes&nbsp;<i class="fas fa-people-carry"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        PASSES WONS:&nbsp;&nbsp;{this.state.passesWon}<br></br>
                                        <br></br>
                                        PASSES ATTEMPTED :&nbsp;&nbsp;{this.state.passesAttmp}
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                        {/* -----------------------------------END-------------------------------------------------------------------*/}
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                {/* SIDE RENDER TAB  */}
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="userCard">
                           <DropDownTabs  Goal= {this.state.GoalAccuracy} Tackles = {this.state.TackleAccuracy}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
             </Row>
             </Tab.Container>
             </div>
        </div>
        );
    }
}

export default AYATab;