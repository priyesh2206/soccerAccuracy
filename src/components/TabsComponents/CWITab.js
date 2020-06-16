import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import{Line,Doughnut} from 'react-chartjs-2';
import './CWITab.css';

////////////////////////////////////////////////////////All ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////
const Graph = (props) =>{
    console.log(props)


  return(
      <div>
     <h1 className="GoalGraphCWOline">Player Accuracy Comparison&nbsp;<i class="fas fa-chart-line"></i></h1>
      <div className="Graph">
      <Line 
      options={{
          responsive:true,

      }}

      data = {{
          labels:[0, 2, 4, 6, 8,10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64,66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92,94, 96, 98, 100],
          datasets:[
          
            {
              label:"Goal Accuracy Date-1 ",
              backgroundColor:"rgba(255,0,255,0.45)",
              fill: false,
              borderColor: '#ff9234',
              data:[{x:0,y:0},{
                x:props.goal1,
                y: props.goal1
              }]
            },
           {
               label:"Tackles Accuracy Date-1",
               backgroundColor:"rgba(255,255,55,0.65)",
               fill: false,
               borderColor: '#ffcd3c',
               data:[{x:0,y:0},{
                x: props.tackle1,
                y: props.tackle1
               }]
            },
            {
                label:"Pass Accuracy Date-1",
                backgroundColor:"rgba(255,25,55,0.75)",
                fill:false,
                borderColor: '#d92027',
                data:[{x:0,y:0},{
                 x: props.passes1,
                 y: props.passes1
             }]
           },
           {
            label:"Goal Accuracy Date-2",
            backgroundColor:"rgba(255,0,255,0.45)",
            fill: false,
            borderColor: '#45046a',
            data:[{x:0,y:0},{
              x:props.goal2,
              y: props.goal2
            }]
          },
          {
            label:"Tackles Accuracy Date-2",
            backgroundColor:"rgba(255,255,55,0.65)",
            fill: false,
            borderColor: '#b5076b',
            data:[{x:0,y:0},{
             x: props.tackle2,
             y: props.tackle2
            }]
         },
         {
            label:"Pass Accuracy Date-2",
            backgroundColor:"rgba(255,25,55,0.75)",
            fill:false,
            borderColor: '#709fb0',
            data:[{x:0,y:0},{
             x: props.passes2,
             y: props.passes2
         }]
       },
        ]
      }}  
      />
      </div>
      </div>
  )
}

//////////////////////////////////////////////////// Player 1 ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////

const PlayerGraph1=(props)=>{
    
    const state = {
        labels: ['Goal Accuracy','Tackle Accuracy','Passes Accuracy'],
        datasets: [
          {
            label: 'Goal',
            backgroundColor: [
              '#ff9234',
              '#ffcd3c',
              '#d92027'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#303960'
            ],
            data: [props.goal1,props.tackle1,props.passes1],
          }
        ]
      }
    
      return(
          <div>
              <h1 className="GoalGraphCWO">Player Accuracy Date-1&nbsp;<i class="fas fa-volleyball-ball"></i></h1>
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

//////////////////////////////////////////////////// Player 2 ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////

const PlayerGraph2=(props)=>{
    
    const state = {
        labels: ['Goal Accuracy ','Tackle Accuracy','Passes Accuracy'],
        datasets: [
          {
            label: 'Goal',
            backgroundColor: [
              '#45046a',
              '#b5076b',
              '#709fb0'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#303960'
            ],
            data: [props.goal2,props.tackle2,props.passes2],
          }
        ]
      }
    
      return(
          <div>
              <h1 className="GoalGraphCWO">Player Accuracy Date-2&nbsp;<i class="fas fa-volleyball-ball"></i></h1>
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

////////////////////////////////////////////////////  PIE CHART ////////////////////////////////////////////////////////////////////////////////////////

const PlayerGraph=(props)=>{
    
    const state = {
        labels: ['Goal Accuracy D1 ','Tackle Accuracy D1','Passes Accuracy D1','Goal Accuracy D2' ,'Tackle Accuracy D2' ,'Passes Accuracy D2'],
        datasets: [
          {
            label: 'Goal',
            backgroundColor: [
              '#ff9234',
              '#ffcd3c',
              '#d92027',
              '#45046a',
              '#b5076b',
              '#709fb0'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#303960',
            '#501800',
            '#4B5000',
            '#303960'
            ],
            data: [props.goal1,props.tackle1,props.passes1,props.goal2,props.tackle2,props.passes2],
          }
        ]
      }
    
      return(
          <div>
              <h1 className="GoalGraphCWO">Player Accuracy Comparison&nbsp;<i class="fas fa-chart-pie"></i></h1>
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


// --------------------------------------------DROPDOWN LIST FOR PLAYER ON ONE DATE -----------------------------------------------------------------//
const DropDownTabs = (props) =>{
    return (
      <div>
       <div className="tabsCWO">
           <Tab.Container  defaultActiveKey="allAccuracy">
               <DropdownButton  title="Accuracy!"> 
               <Dropdown.Item action eventKey="allAccuracy">Line Graph</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item action eventKey="pie">Pie Chart</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item action eventKey="P1Accuracy">Pie Chart Date-1 Accuracy</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="P2Accuracy">Pie Chart Date-2 Accuracy</Dropdown.Item>
               </DropdownButton>
               <Tab.Content>
                   <Tab.Pane eventKey="allAccuracy">
                       <Graph  
                            goal1={props.Goal1}  tackle1={props.Tackle1} passes1={props.Passes1}
                            goal2 ={props.Goal2} tackle2={props.Tackle2} passes2={props.Passes2}
                       />
                   </Tab.Pane>
                   <Tab.Pane eventKey="pie">
                       <PlayerGraph
                            goal1={props.Goal1}  tackle1={props.Tackle1} passes1={props.Passes1}
                            goal2 ={props.Goal2} tackle2={props.Tackle2} passes2={props.Passes2}
                       />
                   </Tab.Pane>
                   <Tab.Pane eventKey="P1Accuracy">
                       <PlayerGraph1 goal1={props.Goal1}  tackle1={props.Tackle1} passes1={props.Passes1} />
                   </Tab.Pane>
                   <Tab.Pane eventKey="P2Accuracy">
                       <PlayerGraph2   goal2 ={props.Goal2} tackle2={props.Tackle2} passes2={props.Passes2} />
                   </Tab.Pane>
                   
               </Tab.Content>
           </Tab.Container>
           </div>
       </div>
    );
  }
//-----------------------------------------------------------------------------------------------------------------------------------------------------//

class CWITab extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          teamname:'',
          goalWonD1:'',
          goalAttmpD1:'',
          tackleWonD1:'',
          tackleAttmpD1:'',
          passesWonD1:'',
          passesAttmpD1:'',
          goalWonD2:'',
          goalAttmpD2:'',
          tackleWonD2:'',
          tackleAttmpD2:'',
          passesWonD2:'',
          passesAttmpD2:'',
          GoalAccuracyD1:'',
          GoalAccuracyD2:'',
          TackleAccuracyD1:'',
          TackleAccuracyD2:'',
          PassesAccuracyD1:'',
          PassesAccuracyD2:'',
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
        const date1 = new Date(localStorage.getItem('CWImatchdateD1'))
        const date2 = new Date(localStorage.getItem('CWImatchdateD2'))
        const finalDate1 = this.getFormattedDate(date1); 
        const finaldate2 = this.getFormattedDate(date2); 
        //fetcht the detail of player one date 
     fetch(`http://localhost:5000/api/users/${localStorage.getItem('CWIplayername')}/${finalDate1}`).then(data=>{
         return data.json()
     }).then(data=>{
            console.log(data)
            this.setState({
                        teamname:data.teamname,
                        goalWonD1:data.goalWon,goalAttmpD1:data.goalAttmp,
                        tackleWonD1:data.tackleWon,tackleAttmpD1:data.tackleAttmp,
                        passesWonD1:data.passesWon,passesAttmpD1:data.passesAttmp
                      })
                      const gw1  = this.state.goalWonD1;
                      const gA1 =  this.state.goalAttmpD1;
                      const GoalAcc1 =  Math.round((gw1/gA1)*100);
                      const tw1 = this.state.tackleWonD1;
                      const tA1  = this.state.tackleAttmpD1;
                      const TacklesAcc1 = Math.round((tw1/tA1)*100);
                      const pw1 = this.state.passesWonD1;
                      const pA1 = this.state.passesAttmpD1;
                      const PassesAcc1 = Math.round((pw1/pA1)*100);
                      this.setState({GoalAccuracyD1:GoalAcc1,TackleAccuracyD1:TacklesAcc1,PassesAccuracyD1:PassesAcc1});
            //fetcht the detail of player another date 
            return  fetch(`http://localhost:5000/api/users/${localStorage.getItem('CWIplayername')}/${finaldate2}`).then(data=>{
                          return data.json()
                    }).then(data=>{
                        console.log(data)
                        this.setState({
                                goalWonD2:data.goalWon,goalAttmpD2:data.goalAttmp,
                                tackleWonD2:data.tackleWon,tackleAttmpD2:data.tackleAttmp,
                                passesWonD2:data.passesWon,passesAttmpD2:data.passesAttmp
                               })
                               const gw2  = this.state.goalWonD2;
                               const gA2 =  this.state.goalAttmpD2;
                               const GoalAcc2 =  Math.round((gw2/gA2)*100);
                               const tw2 = this.state.tackleWonD2;
                               const tA2  = this.state.tackleAttmpD2;
                               const TacklesAcc2 = Math.round((tw2/tA2)*100);
                               const pw2 = this.state.passesWonD2;
                               const pA2 = this.state.passesAttmpD2;
                               const PassesAcc2 = Math.round((pw2/pA2)*100);
                               this.setState({GoalAccuracyD2:GoalAcc2,TackleAccuracyD2:TacklesAcc2,PassesAccuracyD2:PassesAcc2});
                    })
            })
        }
    }

  render(){
      const name=localStorage.getItem('CWIplayername')
      const m1=localStorage.getItem('CWImatchdateD1')
      const m2=localStorage.getItem('CWImatchdateD2')
      return(
        <div>
            {/*BreadCrumb*/}
            <div> 
                <Col  md={4}>
                   <Row md={4}>
                       <Breadcrumb  className="breadCWI">
                          <Breadcrumb.Item href ="/AnalysisDash" >Dashboard</Breadcrumb.Item>
                          <Breadcrumb.Item active>CWI TAB</Breadcrumb.Item>
                       </Breadcrumb>
                    </Row>
                </Col>
            </div>
            {/* Card of user */}
            <div>
             <Tab.Container  defaultActiveKey="userCard">
                 <Row>
                    <Col sm={3}>
                    <Card  border="dark" className="CardBodyCWITab">
                    <Card.Header><h5 className="HeaderCWI">Player Details Date -1 {' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                    <Card.Body >
                    <Card.Title className="tittleCWI">{name}</Card.Title>
                    <Card.Subtitle className="subtittleCWI">{this.state.teamname}</Card.Subtitle>  
                    <Card.Text>
                     <p className="MDateCWI">MatchDate:{m1}</p>
    
                        {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                <Accordion className ="AccordionGoalCWI">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="orange" eventKey="0">
                                        Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                                GOALS WONS:&nbsp;&nbsp;{this.state.goalWonD1}<br></br>
                                                GOALS ATTEMPTED:&nbsp;&nbsp;{this.state.goalAttmpD1}<br></br>
                                                <p className="Accbodyinnerd1"><strong>GOAL ACCURACY:&nbsp;&nbsp;{this.state.GoalAccuracyD1}</strong></p>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                 </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}
    
                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
    
                                <Accordion className ="AccordionGoalCWI">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="yellow" eventKey="0">
                                        Tackles&nbsp;<i class="fas fa-running"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                                TACKLES WONS:&nbsp;&nbsp;{this.state.tackleWonD1}<br></br>
                                                TACKLES ATTEMPTED:&nbsp;&nbsp;{this.state.tackleAttmpD1}<br></br>
                                                <p className="Accbodyinnerd2"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{this.state.TackleAccuracyD1}</strong></p>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}
                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
    
                                <Accordion className ="AccordionGoalCWI">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="red" eventKey="0">
                                        Passes&nbsp;<i class="fas fa-people-carry"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                                PASSES WONS:&nbsp;&nbsp;{this.state.passesWonD1}<br></br>
                                                PASSES ATTEMPTED:&nbsp;&nbsp;{this.state.passesAttmpD1}<br></br>
                                                <p className="Accbodyinnerd3"><strong>PASSES ACCURACY:&nbsp;&nbsp;{this.state.PassesAccuracyD1}</strong></p>
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
                              <Col sm={5} className="Dropdown">
                                  <Tab.Content>
                                      <Tab.Pane eventKey="userCard">
                                         <DropDownTabs
                                         
                                            Goal1   = {this.state.GoalAccuracyD1} 
                                            Tackle1 = {this.state.TackleAccuracyD1} 
                                            Passes1 = {this.state.PassesAccuracyD1}  
        
                                            Goal2  = {this.state.GoalAccuracyD2} 
                                            Tackle2 = {this.state.TackleAccuracyD2} 
                                            Passes2 = {this.state.PassesAccuracyD2} 
                                   
                                         />
                                      </Tab.Pane>
                                  </Tab.Content>
                              </Col>
                     {/* End of side render...... */}
    
                     <div>
                         <Tab.Container  defaultActiveKey="userCard">
                         <Row>
                             <Col sm={3}>
                                 <Card  border="dark" className="CardBodyCWITab">
                                 <Card.Header><h5 className="HeaderCWI">Player Details Date-2 {' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                                 <Card.Body >
                                 <Card.Title className="tittleCWI">{name}</Card.Title>
                                 <Card.Subtitle className="subtittleCWI">{this.state.teamname}</Card.Subtitle>  
                                 <Card.Text>
                                 <p className="MDateCWI">MatchDate:{m2}</p>
        
                                 {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                         <Accordion className ="AccordionGoalCWI">
                                             <Card>
                                             <Card.Header>
                                             <Accordion.Toggle as={Button} className="goald2" eventKey="0">
                                                 Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                             </Accordion.Toggle>
                                             </Card.Header>
                                             <Accordion.Collapse eventKey="0">
                                             <Card.Body className="AccBody">
                                                    GOALS WONS:&nbsp;&nbsp;{this.state.goalWonD2}<br></br>
                                                    GOALS ATTEMPTED:&nbsp;&nbsp;{this.state.goalAttmpD2}<br></br>
                                                    <p className="Accbodyinnerd4"><strong>GOAL ACCURACY:&nbsp;&nbsp;{this.state.GoalAccuracyD2}</strong></p>
                                             </Card.Body>
                                             </Accordion.Collapse>
                                             </Card>
                                          </Accordion>
                                 {/* -----------------------------------END-------------------------------------------------------------------*/}
                 
                                 {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
                 
                                         <Accordion className ="AccordionGoalCWI">
                                             <Card>
                                             <Card.Header>
                                             <Accordion.Toggle as={Button} className="tackled2" eventKey="0">
                                                 Tackles&nbsp;<i class="fas fa-running"></i>
                                             </Accordion.Toggle>
                                             </Card.Header>
                                             <Accordion.Collapse eventKey="0">
                                             <Card.Body className="AccBody">
                                                    TACKLES WONS:&nbsp;&nbsp;{this.state.tackleWonD2}<br></br>
                                                    TACKLES ATTEMPTED:&nbsp;&nbsp;{this.state.tackleAttmpD2}<br></br>
                                                    <p className="Accbodyinnerd5"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{this.state.TackleAccuracyD2}</strong></p>
                                             </Card.Body>
                                             </Accordion.Collapse>
                                             </Card>
                                         </Accordion>
                                 {/*   -----------------------------------END-------------------------------------------------------------------*/}
                                 {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
        
                                         <Accordion className ="AccordionGoalCWI">
                                             <Card>
                                             <Card.Header>
                                             <Accordion.Toggle as={Button} className="passesd2" eventKey="0">
                                                 Passes&nbsp;<i class="fas fa-people-carry"></i>
                                             </Accordion.Toggle>
                                             </Card.Header>
                                             <Accordion.Collapse eventKey="0">
                                             <Card.Body className="AccBody">
                                                    PASSES WONS:&nbsp;&nbsp;{this.state.passesWonD2}<br></br>
                                                    PASSES ATTEMPTED:&nbsp;&nbsp;{this.state.passesAttmpD2}<br></br>
                                                    <p className="Accbodyinnerd6"><strong>PASSES ACCURACY:&nbsp;&nbsp;{this.state.PassesAccuracyD2}</strong></p>
                                             </Card.Body>
                                             </Accordion.Collapse>
                                             </Card>
                                         </Accordion>
        
                                 {/* -----------------------------------END-------------------------------------------------------------------*/}
                                 </Card.Text>
                                 </Card.Body>
                                 </Card>
                             </Col>
                         </Row>
                         </Tab.Container>
                     </div>
                 </Row>
             </Tab.Container>
             </div>
        </div>
      );
    }
}

export default CWITab;