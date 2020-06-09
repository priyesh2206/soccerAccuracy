import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import './AYATab.css';
import {Line,Doughnut} from 'react-chartjs-2'

//////////////////////////////////////////////////// All ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////
const Graph = (props) =>{
    console.log(props)


  return(
      <div>
      <Line 
      options={{
          responsive:true,

      }}

      data = {{
          labels:[0, 2, 4, 6, 8,10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92,94, 96, 98, 100],
          datasets:[
          {
              label:"Goal Accuracy",
              backgroundColor:"rgba(255,0,255,0.45)",
              fill: false,
              borderColor: '#d63447',
              data:[{x:0,y:0},{
                x:props.goals,
                y: props.goals
            }]
          },
           {
               label:"Tackles Accuracy",
               backgroundColor:"rgba(255,255,55,0.65)",
               fill: false,
               borderColor: '#f3c623',
               data:[{x:0,y:0},{
                x: props.tackles,
                y: props.tackles
               }]
            },
            {
                label:"Pass Accuracy",
                backgroundColor:"rgba(255,25,55,0.75)",
                fill:false,
                borderColor: '#5c2a9d',
                data:[{x:0,y:0},{
                 x: props.passes,
                 y: props.passes
             }
        
        ]}
        ]
      }}  
      />
      </div>
  )
}

//////////////////////////////////////////////////// Goal ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////

const GoalGraph=(props)=>{
    
    const state = {
        labels: ['Goal Won','Goal Attempted','Goal Accuracy'],
        datasets: [
          {
            label: 'Goal',
            backgroundColor: [
              '#0e9aa7',
              '#f37121',
              '#d92027'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#303960'
            ],
            data: [props.goalwons,props.goalattempteds,props.goals],
          }
        ]
      }
    
      return(
          <div>
              <h1 className="GoalGraph">GOAL ACCURACY &nbsp;<i class="fas fa-volleyball-ball"></i></h1>
            <Doughnut
                 data={state}
                 options={{
                    title:{
                       display:true,
                       
                    },
                    legend:{
                       display:true,
                       position:'right',
                    }
                }}
            />
        </div>
      );
}

//////////////////////////////////////////////////// Tackles ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////


const TackleGraph=(props)=>{
    
    const state = {
        labels: ['Tackles Won','Tackles Attempted','Tackles Accuracy'],
        datasets: [
          {
            label: 'Tackles',
            backgroundColor: [
              '#0e9aa7',
              '#f37121',
              '#d92027'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#303960'
            ],
            data: [props.tacklewons,props.tackleattempteds,props.tackles],
          }
        ]
      }
    
      return(
          <div>
              <h1 className="GoalGraph">TACKLE ACCURACY &nbsp;<i class="fas fa-running"></i></h1>
            <Doughnut
                 data={state}
                 options={{
                    title:{
                       display:true,
                       
                    },
                    legend:{
                       display:true,
                       position:'right',
                    }
                }}
            />
        </div>
      );
}
//////////////////////////////////////////////////// Passes ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////


const PassesGraph=(props)=>{
    
    const state = {
        labels: ['Passes Won','Passes Attempted','Passes Accuracy'],
        datasets: [
          {
            label: 'Passes',
            backgroundColor: [
              '#0e9aa7',
              '#f37121',
              '#d92027'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#303960'
            ],
            data: [props.passeswons,props.passesattempteds,props.passes],
          }
        ]
      }
    
      return(
          <div>
              <h1 className="GoalGraph">PASSES ACCURACY &nbsp;<i class="fas fa-street-view"></i></h1>
            <Doughnut
                 data={state}
                 options={{
                    title:{
                       display:true,
                       
                    },
                    legend:{
                       display:true,
                       position:'right',
                    }
                }}
            />
        </div>
      );
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





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
                      <Graph          goals = {props.Goal} tackles = {props.Tackles} passes={props.Passes}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="gAccuracy">
                       <GoalGraph     goalwons = {props.GoalWons} goalattempteds = {props.GoalAttempteds} goals = {props.Goal} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="tAccuracy">
                       <TackleGraph   tacklewons = {props.TackleWons} tackleattempteds = {props.TackleAttempteds}  tackles = {props.Tackles}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="pAccuracy">
                        <PassesGraph  passeswons = {props.PassesWons} passesattempteds = {props.PassesAttempteds}  passes = {props.Passes}/>
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
            console.log(data)
              this.setState({
                            teamname:data.teamname,
                            goalWon:data.goalWon,goalAttmp:data.goalAttmp,
                            tackleWon:data.tackleWon,tackleAttmp:data.tackleAttmp,
                            passesWon:data.passesWon,passesAttmp:data.passesAttmp
                          })
               const gw  = this.state.goalWon;
               const gA =  this.state.goalAttmp;
               const GoalAcc =  Math.round((gw/gA)*100);
               const tw = this.state.tackleWon;
               const tA  = this.state.tackleAttmp;
               const TacklesAcc = Math.round((tw/tA)*100);
               const pw = this.state.passesWon;
               const pA = this.state.passesAttmp;
               const PassesAcc = Math.round((pw/pA)*100);
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
                                    <Accordion.Toggle as={Button} variant="red" eventKey="0">
                                        Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        GOALS WONS :&nbsp;&nbsp;{this.state.goalWon}<br></br>
                                        GOALS ATTEMPTED:&nbsp;&nbsp;{this.state.goalAttmp}<br></br>
                                        <p className="Accbodyinner1">GOALS ACCURACY:&nbsp;&nbsp;{this.state.GoalAccuracy}</p>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                 </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}

                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}

                                <Accordion className ="AccordionGoalAYA">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="yellow" eventKey="0">
                                        TACKLES&nbsp;<i class="fas fa-running"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        TACKLES WONS :&nbsp;&nbsp;{this.state.tackleWon}<br></br>
                                        TACKLES ATTEMPTED:&nbsp;&nbsp;{this.state.tackleAttmp}<br></br>
                                        <p className="Accbodyinner2">TACKLES ACCURACY:&nbsp;&nbsp;{this.state.TackleAccuracy}</p>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}
                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}

                                <Accordion className ="AccordionGoalAYA">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="purple" eventKey="0">
                                        Passes&nbsp;<i class="fas fa-people-carry"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        PASSES WONS:&nbsp;&nbsp;{this.state.passesWon}<br></br>
                                        PASSES ATTEMPTED :&nbsp;&nbsp;{this.state.passesAttmp}<br></br>
                                        <p className="Accbodyinner3">PASSES ACCURACY:&nbsp;&nbsp;{this.state.PassesAccuracy}</p>
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
                           <DropDownTabs  Goal= {this.state.GoalAccuracy}
                                          Tackles = {this.state.TackleAccuracy}  
                                          Passes={this.state.PassesAccuracy}
                                          
                                          GoalWons = {this.state.goalWon}
                                          GoalAttempteds = {this.state.goalAttmp}
                                        
                                          TackleWons = {this.state.tackleWon}
                                          TackleAttempteds = {this.state.tackleAttmp}

                                          PassesWons = {this.state.passesWon}
                                          PassesAttempteds = {this.state.passesAttmp}
                                          
                                          />
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