import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import{Line,Doughnut} from 'react-chartjs-2';
import './CWOTab.css';


/////////////////////////////////////////////////// All ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////
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
              label:"Goal Accuracy P-1 ",
              backgroundColor:"rgba(255,0,255,0.45)",
              fill: false,
              borderColor: '#ff9234',
              data:[{x:0,y:0},{
                x:props.goal1,
                y: props.goal1
              }]
            },
           {
               label:"Tackles Accuracy P-1",
               backgroundColor:"rgba(255,255,55,0.65)",
               fill: false,
               borderColor: '#ffcd3c',
               data:[{x:0,y:0},{
                x: props.tackle1,
                y: props.tackle1
               }]
            },
            {
                label:"Pass Accuracy P-1",
                backgroundColor:"rgba(255,25,55,0.75)",
                fill:false,
                borderColor: '#d92027',
                data:[{x:0,y:0},{
                 x: props.passes1,
                 y: props.passes1
             }]
           },
           {
            label:"Goal Accuracy P-2",
            backgroundColor:"rgba(255,0,255,0.45)",
            fill: false,
            borderColor: '#45046a',
            data:[{x:0,y:0},{
              x:props.goal2,
              y: props.goal2
            }]
          },
          {
            label:"Tackles Accuracy P-2",
            backgroundColor:"rgba(255,255,55,0.65)",
            fill: false,
            borderColor: '#b5076b',
            data:[{x:0,y:0},{
             x: props.tackle2,
             y: props.tackle2
            }]
         },
         {
            label:"Pass Accuracy P-2",
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
              <h1 className="GoalGraphCWO">Player 1 Accuracy&nbsp;<i class="fas fa-volleyball-ball"></i></h1>
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
        labels: ['Goal Accuracy','Tackle Accuracy','Passes Accuracy'],
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
              <h1 className="GoalGraphCWO">Player 2 Accuracy&nbsp;<i class="fas fa-volleyball-ball"></i></h1>
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
        labels: ['Goal Accuracy P1 ','Tackle Accuracy P1','Passes Accuracy P3','Goal Accuracy P2' ,'Tackle Accuracy P2' ,'Passes Accuracy P2'],
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
               <Dropdown.Item action eventKey="P1Accuracy">Pie Chart P-1 Accuracy</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="P2Accuracy">Pie Chart P-2 Accuracy</Dropdown.Item>
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
  


class CWOTab extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            teamnamep1:'',
            goalWonP1:'',
            goalAttmpP1:'',
            tackleWonP1:'',
            tackleAttmpP1:'',
            passesWonP1:'',
            passesAttmpP1:'',
            teamnameP2:'',
            goalWonP2:'',
            goalAttmpP2:'',
            tackleWonP2:'',
            tackleAttmpP2:'',
            passesWonP2:'',
            passesAttmpP2:'',
            GoalAccuracyP1:'',
            TackleAccuracyP1:'',
            PassesAccuracyP1:'',
            GoalAccuracyP2:'',
            TackleAccuracyP2:'',
            PassesAccuracyP2:''

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
            const date1 = new Date(localStorage.getItem('CWOmatchdateP1'))
            const date2 = new Date(localStorage.getItem('CWOmatchdateP2'))
            const finalDateP1 = this.getFormattedDate(date1); 
            const finaldateP2 = this.getFormattedDate(date2); 
            //fetcht the detail of player one date 
         fetch(`http://localhost:5000/api/users/${localStorage.getItem('CWOplayername1')}/${finalDateP1}`).then(data=>{
             return data.json()
         }).then(data=>{
                console.log(data)
                this.setState({
                            teamnameP1:data.teamname,
                            goalWonP1:data.goalWon,goalAttmpP1:data.goalAttmp,
                            tackleWonP1:data.tackleWon,tackleAttmpP1:data.tackleAttmp,
                            passesWonP1:data.passesWon,passesAttmpP1:data.passesAttmp
                          })
                        const gw1  = this.state.goalWonP1;
                        const gA1 =  this.state.goalAttmpP1;
                        const GoalAcc1 =  Math.round((gw1/gA1)*100);
                        const tw1 = this.state.tackleWonP1;
                        const tA1  = this.state.tackleAttmpP1;
                        const TacklesAcc1 = Math.round((tw1/tA1)*100);
                        const pw1 = this.state.passesWonP1;
                        const pA1 = this.state.passesAttmpP1;
                        const PassesAcc1 = Math.round((pw1/pA1)*100);
                        this.setState({GoalAccuracyP1:GoalAcc1,TackleAccuracyP1:TacklesAcc1,PassesAccuracyP1:PassesAcc1});
                //fetcht the detail of player another date 
                return  fetch(`http://localhost:5000/api/users/${localStorage.getItem('CWOplayername2')}/${finaldateP2}`).then(data=>{
                              return data.json()
                        }).then(data=>{
                            console.log(data)
                            this.setState({
                                    goalWonP2:data.goalWon,goalAttmpP2:data.goalAttmp,
                                    tackleWonP2:data.tackleWon,tackleAttmpP2:data.tackleAttmp,
                                    passesWonP2:data.passesWon,passesAttmpP2:data.passesAttmp
                                   })
                        const gw2  = this.state.goalWonP2;
                        const gA2 =  this.state.goalAttmpP2;
                        const GoalAcc2 =  Math.round((gw2/gA2)*100);
                        const tw2 = this.state.tackleWonP2;
                        const tA2  = this.state.tackleAttmpP2;
                        const TacklesAcc2 = Math.round((tw2/tA2)*100);
                        const pw2 = this.state.passesWonP2;
                        const pA2 = this.state.passesAttmpP2;
                        const PassesAcc2 = Math.round((pw2/pA2)*100);
                        this.setState({GoalAccuracyP2:GoalAcc2,TackleAccuracyP2:TacklesAcc2,PassesAccuracyP2:PassesAcc2});
                        })
                })
            }
        }

    render(){
        const name1=localStorage.getItem('CWOplayername1')
        const name2=localStorage.getItem('CWOplayername2')
        const m1=localStorage.getItem('CWOmatchdateP1')
        const m2=localStorage.getItem('CWOmatchdateP2')
        return(

        <div>
                <div> 
                    <Col  md={4}>
                       <Row md={4}>
                           <Breadcrumb  className="breadCWO">
                              <Breadcrumb.Item href ="/AnalysisDash" >Dashboard</Breadcrumb.Item>
                              <Breadcrumb.Item active>CWO TAB</Breadcrumb.Item>
                           </Breadcrumb>
                       </Row>
                    </Col>
                </div>


           {/* Card of user */}
                <div>
                    <Tab.Container  defaultActiveKey="userCard">
                    <Row>
                        <Col sm={3}>
                            <Card  border="dark" className="CardBodyCWOTab">
                            <Card.Header><h5 className="HeaderCWO">Player-1 Details {' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                            <Card.Body >
                            <Card.Title className="tittleCWO">{name1}</Card.Title>
                            <Card.Subtitle className="subtittleCWO">{this.state.teamnameP1}</Card.Subtitle>  
                            <Card.Text>
                             <p className="MDateCWO">MatchDate:{m1}</p>
             
                                {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                        <Accordion className ="AccordionGoalCWO">
                                            <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="orange " eventKey="0">
                                                Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body className="AccBody">
                                                GOALS WONS:&nbsp;&nbsp;{this.state.goalWonP1}<br></br>
                                                GOALS ATTEMPTED:&nbsp;&nbsp;{this.state.goalAttmpP1}<br></br>
                                                <p className="Accbodyinnerp1"><strong>GOAL ACCURACY:&nbsp;&nbsp;{this.state.GoalAccuracyP1}</strong></p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            </Card>
                                         </Accordion>
                                {/* -----------------------------------END-------------------------------------------------------------------*/}
             
                                {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
             
                                        <Accordion className ="AccordionGoalCWO">
                                            <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="yellow" eventKey="0">
                                                Tackles&nbsp;<i class="fas fa-running"></i>
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body className="AccBody">
                                                TACKLES WONS:&nbsp;&nbsp;{this.state.tackleWonP1}<br></br>
                                                TACKLES ATTEMPTED:&nbsp;&nbsp;{this.state.tackleAttmpP1}<br></br>
                                                <p className="Accbodyinnerp2"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{this.state.TackleAccuracyP1}</strong></p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                {/* -----------------------------------END-------------------------------------------------------------------*/}
                                {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
             
                                        <Accordion className ="AccordionGoalCWO">
                                            <Card>
                                            <Card.Header>
                                            <Accordion.Toggle as={Button} variant="red" eventKey="0">
                                                PASSES&nbsp;<i class="fas fa-people-carry"></i>
                                            </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body className="AccBody">
                                                PASSES WONS:&nbsp;&nbsp;{this.state.passesWonP1}<br></br>
                                                PASSES ATTEMPTED:&nbsp;&nbsp;{this.state.passesAttmpP1}<br></br>
                                                <p className="Accbodyinnerp3"><strong>PASSES ACCURACY:&nbsp;&nbsp;{this.state.PassesAccuracyP1}</strong></p>
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
                        <Col sm={5}  className="Dropdown">
                            <Tab.Content>
                                <Tab.Pane eventKey="userCard">
                                   <DropDownTabs
                                    
                                    Goal1   = {this.state.GoalAccuracyP1} 
                                    Tackle1 = {this.state.TackleAccuracyP1} 
                                    Passes1 = {this.state.PassesAccuracyP1}  

                                    Goal2  = {this.state.GoalAccuracyP2} 
                                    Tackle2 = {this.state.TackleAccuracyP2} 
                                    Passes2 = {this.state.PassesAccuracyP2} 
                                   
                                   />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                        {/* CARD ------------------------Two---------------------------------------------------Two-----------------------------  */}
                       <div className="card2">
                            <Tab.Container  defaultActiveKey="userCard">
                                <Row>
                                    <Col sm={3}>
                                        <Card  border="dark" className="CardBodyCWOTab">
                                        <Card.Header><h5 className="HeaderCWO">Player-2 Details {' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                                        <Card.Body >
                                        <Card.Title className="tittleCWO">{name2}</Card.Title>
                                        <Card.Subtitle className="subtittleCWO">{this.state.teamnameP2}</Card.Subtitle>  
                                        <Card.Text>
                                        <p className="MDateCWO">MatchDate:{m2}</p>
                         
                                            {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                                    <Accordion className ="AccordionGoalCWO">
                                                        <Card>
                                                        <Card.Header>
                                                        <Accordion.Toggle as={Button} className="goalp2" eventKey="0">
                                                            Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                                        </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                        <Card.Body className="AccBody">
                                                            GOALS WONS:&nbsp;&nbsp;{this.state.goalWonP2}<br></br>
                                                            GOALS ATTEMPTED:&nbsp;&nbsp;{this.state.goalAttmpP2}<br></br>
                                                            <p className="Accbodyinnerp4"><strong>GOAL ACCURACY:&nbsp;&nbsp;{this.state.GoalAccuracyP2}</strong></p>
                                                        </Card.Body>
                                                        </Accordion.Collapse>
                                                        </Card>
                                                     </Accordion>
                                            {/* -----------------------------------END-------------------------------------------------------------------*/}
                         
                                            {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
                         
                                                    <Accordion className ="AccordionGoalCWO">
                                                        <Card>
                                                        <Card.Header>
                                                        <Accordion.Toggle as={Button} className="tacklep2"  eventKey="0">
                                                            Tackles&nbsp;<i class="fas fa-running"></i>
                                                        </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                        <Card.Body className="AccBody">
                                                            TACKLES WONS:&nbsp;&nbsp;{this.state.tackleWonP2}<br></br>
                                                            TACKLES ATTEMPTED:&nbsp;&nbsp;{this.state.tackleAttmpP2}<br></br>
                                                            <p className="Accbodyinnerp5"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{this.state.TackleAccuracyP2}</strong></p>
                                                        </Card.Body>
                                                        </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
                                            {/* -----------------------------------END-------------------------------------------------------------------*/}
                                            {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}
                         
                                                    <Accordion className ="AccordionGoalCWO">
                                                        <Card>
                                                        <Card.Header>
                                                        <Accordion.Toggle as={Button} className="passesp2" eventKey="0">
                                                            Passes&nbsp;<i class="fas fa-people-carry"></i>
                                                        </Accordion.Toggle>
                                                        </Card.Header>
                                                        <Accordion.Collapse eventKey="0">
                                                        <Card.Body className="AccBody">
                                                            PASSES WONS:&nbsp;&nbsp;{this.state.passesWonP2}<br></br>
                                                            PASSES ATTEMPTED:&nbsp;&nbsp;{this.state.passesAttmpP2}<br></br>
                                                            <p className="Accbodyinnerp6"><strong>PASSES ACCURACY:&nbsp;&nbsp;{this.state.PassesAccuracyP2}</strong></p>
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



export default CWOTab;