import React from 'react';
import{Col,Row} from 'reactstrap';
import { toast} from 'react-toastify';
import {Line} from 'react-chartjs-2';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import './WVDTab.css';

//////////////////////////////////////////////////// All Weekly ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////
const Graph = (props) =>{
    const sum1=(props.g1+props.t1+props.p1)
    const sum2=(props.g2+props.t2+props.p2)
    const sum3=(props.g3+props.t3+props.p3)
    const sum4=(props.g4+props.t4+props.p4)
    const sum5=(props.g5+props.t5+props.p5)
    const sum6=(props.g6+props.t6+props.p6)
    const sum7=(props.g7+props.t7+props.p7)
  return(
      <div>
           <h1 className="GoalGraphAYAline">Player Weekly Accuracy Analysis&nbsp;<i class="fas fa-chart-line"></i></h1>
      <div>
      <Line 
      options={{
          responsive:true,
          title:{
            display:true,
            text:'Total Weekly Accuracy!',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }

      }}

      data = {{
        labels: ['Day-1', 'Day-2', 'Day-3','Day-4', 'Day-5','Day-6','Day-7'],
          datasets:[
          {
            label: 'Total Weekly Accuracy!',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#b5076b',
            borderColor: '#45046a',
            borderWidth: 2,
            data: [sum1,sum2,sum3,sum4,sum5,sum6,sum7]
        } ,      
        ]
      }}  
      />
      </div>
      </div>
  )
}
//////////////////////////////////////////////////// Goal Weekly ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////

const GOAl = (props) =>{
  return(
      <div>
           <h1 className="GoalGraphAYAline"> Weekly Goal Accuracy &nbsp;<i class="fas fa-chart-line"></i></h1>
      <div>
      <Line 
      options={{
          responsive:true,
          title:{
            display:true,
          },
          legend:{
            display:true,
            position:'right'
          }

      }}

      data = {{
        labels: ['Day-1', 'Day-2', 'Day-3','Day-4', 'Day-5','Day-6','Day-7'],
          datasets:[
          {
            label: 'Weekly Goal Accuracy!',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#fa7d09',
            borderColor: '#ff4301',
            borderWidth: 3,
            data: [props.g1,props.g2,props.g3,props.g4,props.g5,props.g6,props.g7]
        } ,      
        ]
      }}  
      />
      </div>
      </div>
  )
}
//////////////////////////////////////////////////// Tackle Weekly ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////

const TACKLES = (props) =>{
    return(
        <div>
             <h1 className="GoalGraphAYAline"> Weekly Tackles Accuracy &nbsp;<i class="fas fa-chart-line"></i></h1>
        <div>
        <Line 
        options={{
            responsive:true,
            title:{
              display:true,
            },
            legend:{
              display:true,
              position:'right'
            }
  
        }}
  
        data = {{
          labels:  ['Day-1', 'Day-2', 'Day-3','Day-4', 'Day-5','Day-6','Day-7'],
            datasets:[
            {
              label: 'Weekly Tackles Accuracy!',
              fill: true,
              lineTension: 0.5,
              backgroundColor: '#086972',
              borderColor: '#87dfd6',
              borderWidth: 3,
              data: [props.t1,props.t2,props.t3,props.t4,props.t5,props.t6,props.t7]
          } ,      
          ]
        }}  
        />
        </div>
        </div>
    )
  }
//////////////////////////////////////////////////// Tackle Weekly ACCURACY GRAPH/////////////////////////////////////////////////////////////////////////////////

const PASSES = (props) =>{
    return(
        <div>
             <h1 className="GoalGraphAYAline"> Weekly Passes Accuracy &nbsp;<i class="fas fa-chart-line"></i></h1>
        <div>
        <Line 
        options={{
            responsive:true,
            title:{
              display:true,
            },
            legend:{
              display:true,
              position:'right'
            }
  
        }}
  
        data = {{
          labels:  ['Day-1', 'Day-2', 'Day-3','Day-4', 'Day-5','Day-6','Day-7'],
            datasets:[
            {
              label: 'Weekly Passes Accuracy!',
              fill: true,
              lineTension: 0.5,
              backgroundColor: '#393e46',
              borderColor: '#222831',
              borderWidth: 3,
              data: [props.p1,props.p2,props.p3,props.p4,props.p5,props.p6,props.p7]
          } ,      
          ]
        }}  
        />
        </div>
        </div>
    )
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DropDownTabs = (props) =>{
    return (
       <div className="tabsWVD">
           <Tab.Container  defaultActiveKey="allAccuracy">
               <DropdownButton  title="Accuracy!"> 
               <Dropdown.Item action eventKey="allAccuracy">Total Weekly Accuracy</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item action eventKey="gAccuracy">Weekly Goal Accuracy</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="tAccuracy">Weekly Tackles Accuracy </Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="pAccuracy">Weekly Passes Accuracy</Dropdown.Item>
               </DropdownButton>
               <Tab.Content>
                   <Tab.Pane eventKey="allAccuracy">
                       <Graph
                       g1={props.GoalAccuracyweekly1}
                       g2={props.GoalAccuracyweekly2}
                       g3={props.GoalAccuracyweekly3}
                       g4={props.GoalAccuracyweekly4}
                       g5={props.GoalAccuracyweekly5}
                       g6={props.GoalAccuracyweekly6}
                       g7={props.GoalAccuracyweekly7}

                       t1={props.TackleAccuracyweekly1}
                       t2={props.TackleAccuracyweekly2}
                       t3={props.TackleAccuracyweekly3}
                       t4={props.TackleAccuracyweekly4}
                       t5={props.TackleAccuracyweekly5}
                       t6={props.TackleAccuracyweekly6}
                       t7={props.TackleAccuracyweekly7}

                       p1={props.PassesAccuracyweekly1}
                       p2={props.PassesAccuracyweekly2}
                       p3={props.PassesAccuracyweekly3}
                       p4={props.PassesAccuracyweekly4}
                       p5={props.PassesAccuracyweekly5}
                       p6={props.PassesAccuracyweekly6}
                       p7={props.PassesAccuracyweekly7}
                       />
                   </Tab.Pane>
                   <Tab.Pane eventKey="gAccuracy">
                       <GOAl
                        g1={props.GoalAccuracyweekly1}
                        g2={props.GoalAccuracyweekly2}
                        g3={props.GoalAccuracyweekly3}
                        g4={props.GoalAccuracyweekly4}
                        g5={props.GoalAccuracyweekly5}
                        g6={props.GoalAccuracyweekly6}
                        g7={props.GoalAccuracyweekly7}                       
                       />
                      
                   </Tab.Pane>
                   <Tab.Pane eventKey="tAccuracy">
                      <TACKLES
                       t1={props.TackleAccuracyweekly1}
                       t2={props.TackleAccuracyweekly2}
                       t3={props.TackleAccuracyweekly3}
                       t4={props.TackleAccuracyweekly4}
                       t5={props.TackleAccuracyweekly5}
                       t6={props.TackleAccuracyweekly6}
                       t7={props.TackleAccuracyweekly7}
                      />
                   </Tab.Pane>
                   <Tab.Pane eventKey="pAccuracy">
                       <PASSES
                       p1={props.PassesAccuracyweekly1}
                       p2={props.PassesAccuracyweekly2}
                       p3={props.PassesAccuracyweekly3}
                       p4={props.PassesAccuracyweekly4}
                       p5={props.PassesAccuracyweekly5}
                       p6={props.PassesAccuracyweekly6}
                       p7={props.PassesAccuracyweekly7} 
                       />
                   </Tab.Pane>
               </Tab.Content>
           </Tab.Container>
       </div>
    );
}

////////////////////////////////////////////////////////////////DropDown of the Card display the weekly data//////////////////////////////////////////////
const DropDownTabsCard = (props) =>{
    return (
       <div>
           <Tab.Container defaultActiveKey="Week-1$2">
               <DropdownButton  title="Weekly details" color="danger"> 
               <Dropdown.Item action eventKey="Week-1$2">Day 1&2</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="Week-3$4">Day 3&4</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="Week-5$6">Day 5&6</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="Week-7">Day 7</Dropdown.Item>
               </DropdownButton>

               <Tab.Content>

                   <Tab.Pane eventKey="Week-1$2">
                       
                        <Accordion className ="AccordionGoalWVD">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} className="Acc1"  eventKey="0">
                                            Day-1&nbsp;<i class="fas fa-calendar-week"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp; {props.GoalAccuracyweekly1} </strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{props.TackleAccuracyweekly1} </strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp;{props.PassesAccuracyweekly1} </strong></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className ="AccordionGoalWVD">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} className="Acc2" eventKey="0">
                                        Day-2&nbsp;<i class="fas fa-calendar-week"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp;  {props.GoalAccuracyweekly2}</strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp; {props.TackleAccuracyweekly2}</strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp; {props.PassesAccuracyweekly2}</strong></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                   </Tab.Pane>

                   <Tab.Pane eventKey="Week-3$4">

                        <Accordion className ="AccordionGoalWVD">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} className="Acc3"  eventKey="0">
                                            Day-3&nbsp;<i class="fas fa-calendar-week"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp; {props.GoalAccuracyweekly3} </strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{props.TackleAccuracyweekly3} </strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp;{props.PassesAccuracyweekly3} </strong></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className ="AccordionGoalWVD">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} className="Acc4" eventKey="0">
                                        Day-4&nbsp;<i class="fas fa-calendar-week"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp;  {props.GoalAccuracyweekly4}</strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp; {props.TackleAccuracyweekly4}</strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp; {props.PassesAccuracyweekly4}</strong></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                   </Tab.Pane>

                   <Tab.Pane eventKey="Week-5$6">

                        <Accordion className ="AccordionGoalWVD">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} className="Acc5"  eventKey="0">
                                            Day-5&nbsp;<i class="fas fa-calendar-week"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp; {props.GoalAccuracyweekly5} </strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp;{props.TackleAccuracyweekly5} </strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp;{props.PassesAccuracyweekly5} </strong></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                        <Accordion className ="AccordionGoalWVD">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} className="Acc6" eventKey="0">
                                        Day-6&nbsp;<i class="fas fa-calendar-week"></i>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="AccBody">
                                        <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp;  {props.GoalAccuracyweekly6}</strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp; {props.TackleAccuracyweekly6}</strong></p>
                                        <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp; {props.PassesAccuracyweekly6}</strong></p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>

                   </Tab.Pane>

                   <Tab.Pane eventKey="Week-7">

                        <Accordion className ="AccordionGoalWVD">
                                 <Card>
                                     <Card.Header>
                                         <Accordion.Toggle as={Button} className="Acc7" eventKey="0">
                                             Day-7&nbsp;<i class="fas fa-calendar-week"></i>
                                         </Accordion.Toggle>
                                     </Card.Header>
                                     <Accordion.Collapse eventKey="0">
                                         <Card.Body className="AccBody">
                                             <p className="AccbodyinnerWVD1"><strong>GOALS ACCURACY:&nbsp;&nbsp;  {props.GoalAccuracyweekly7}</strong></p>
                                             <p className="AccbodyinnerWVD1"><strong>TACKLE ACCURACY:&nbsp;&nbsp; {props.TackleAccuracyweekly7}</strong></p>
                                             <p className="AccbodyinnerWVD1"><strong>PASSES ACCURACY:&nbsp;&nbsp; {props.PassesAccuracyweekly7}</strong></p>
                                         </Card.Body>
                                     </Accordion.Collapse>
                                 </Card>
                        </Accordion>

                   </Tab.Pane>
               </Tab.Content>
           </Tab.Container>
       </div>
    );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class WVDTab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teamname:'',
            goalWonD1:0,
            goalAttmpD1:0,
            tackleWonD1:0,
            tackleAttmpD1:0,
            passesWonD1:0,
            passesAttmpD1:0,

            goalWonD2:0,
            goalAttmpD2:0,
            tackleWonD2:0,
            tackleAttmpD2:0,
            passesWonD2:0,
            passesAttmpD2:0,

            goalWonD3:0,
            goalAttmpD3:0,
            tackleWonD3:0,
            tackleAttmpD3:0,
            passesWonD3:0,
            passesAttmpD3:0,

            goalWonD4:0,
            goalAttmpD4:0,
            tackleWonD4:0,
            tackleAttmpD4:0,
            passesWonD4:0,
            passesAttmpD4:0,

            goalWonD5:0,
            goalAttmpD5:0,
            tackleWonD5:0,
            tackleAttmpD5:0,
            passesWonD5:0,
            passesAttmpD5:0,

            goalWonD6:0,
            goalAttmpD6:0,
            tackleWonD6:0,
            tackleAttmpD6:0,
            passesWonD6:0,
            passesAttmpD6:0,

            goalWonD7:0,
            goalAttmpD7:0,
            tackleWonD7:0,
            tackleAttmpD7:0,
            passesWonD7:0,
            passesAttmpD7:0,

            GoalAccuracyweekly1:0,
            TackleAccuracyweekly1:0,
            PassesAccuracyweekly1:0,

            GoalAccuracyweekly2:0,
            TackleAccuracyweekly2:0,
            PassesAccuracyweekly2:0,

            GoalAccuracyweekly3:0,
            TackleAccuracyweekly3:0,
            PassesAccuracyweekly3:0,

            GoalAccuracyweekly4:0,
            TackleAccuracyweekly4:0,
            PassesAccuracyweekly4:0,

            GoalAccuracyweekly5:0,
            TackleAccuracyweekly5:0,
            PassesAccuracyweekly5:0,

            GoalAccuracyweekly6:0,
            TackleAccuracyweekly6:0,
            PassesAccuracyweekly6:0,

            GoalAccuracyweekly7:0,
            TackleAccuracyweekly7:0,
            PassesAccuracyweekly7:0,
        }
    }


    componentDidMount(){
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn)
        {
            fetch(`http://localhost:5000/weekly/${localStorage.getItem('WVDplayername')}`).then(data=>{
                return data.json()
            }).then(data=>{

                if(data.length === 0){
                    toast.error(("User not Found"), {
                        position: toast.POSITION.TOP_CENTER
                      });
                }


                else{
                console.log(data[0].playerData)

                if(data[0].playerData.length >= 6)
                {

                this.setState({teamname:data[0].teamname,goalWonD1:data[0].goalWon,goalAttmpD1:data[0].goalAttmp,
                              tackleWonD1:data[0].tackleWon,tackleAttmpD1:data[0].tackleAttmp,
                              passesWonD1:data[0].passesWon,passesAttmpD1:data[0].passesAttmp});
                             
                            const gw1  = this.state.goalWonD1;
                            const gA1 =  this.state.goalAttmpD1;
                            const GoalAcc1 =  Math.round((gw1/gA1)*100);
                            const tw1 = this.state.tackleWonD1;
                            const tA1  = this.state.tackleAttmpD1;
                            const TacklesAcc1 = Math.round((tw1/tA1)*100);
                            const pw1 = this.state.passesWonD1;
                            const pA1 = this.state.passesAttmpD1;
                            const PassesAcc1 = Math.round((pw1/pA1)*100);
                            this.setState({GoalAccuracyweekly1:GoalAcc1,TackleAccuracyweekly1:TacklesAcc1,PassesAccuracyweekly1:PassesAcc1});
                        
                this.setState({goalWonD2:data[0].playerData[0].goalWon,goalAttmpD2:data[0].playerData[0].goalAttmp,
                                tackleWonD2:data[0].playerData[0].tackleWon,tackleAttmpD2:data[0].playerData[0].tackleAttmp,
                                passesWonD2:data[0].playerData[0].passesWon,passesAttmpD2:data[0].playerData[0].passesAttmp}); 

                            const gw2  = this.state.goalWonD2;
                            const gA2 =  this.state.goalAttmpD2;
                            const GoalAcc2 =  Math.round((gw2/gA2)*100);
                            const tw2 = this.state.tackleWonD2;
                            const tA2  = this.state.tackleAttmpD2;
                            const TacklesAcc2 = Math.round((tw2/tA2)*100);
                            const pw2 = this.state.passesWonD2;
                            const pA2 = this.state.passesAttmpD2;
                            const PassesAcc2 = Math.round((pw2/pA2)*100);
                            this.setState({GoalAccuracyweekly2:GoalAcc2,TackleAccuracyweekly2:TacklesAcc2,PassesAccuracyweekly2:PassesAcc2});
                
                this.setState({goalWonD3:data[0].playerData[1].goalWon,goalAttmpD3:data[0].playerData[1].goalAttmp,
                                tackleWonD3:data[0].playerData[1].tackleWon,tackleAttmpD3:data[0].playerData[1].tackleAttmp,
                                passesWonD3:data[0].playerData[1].passesWon,passesAttmpD3:data[0].playerData[1].passesAttmp});

                            const gw3  = this.state.goalWonD3;
                            const gA3 =  this.state.goalAttmpD3;
                            const GoalAcc3 =  Math.round((gw3/gA3)*100);
                            const tw3 = this.state.tackleWonD3;
                            const tA3  = this.state.tackleAttmpD3;
                            const TacklesAcc3 = Math.round((tw3/tA3)*100);
                            const pw3 = this.state.passesWonD3;
                            const pA3 = this.state.passesAttmpD3;
                            const PassesAcc3 = Math.round((pw3/pA3)*100);
                            this.setState({GoalAccuracyweekly3:GoalAcc3,TackleAccuracyweekly3:TacklesAcc3,PassesAccuracyweekly3:PassesAcc3});

                this.setState({goalWonD4:data[0].playerData[2].goalWon,goalAttmpD4:data[0].playerData[2].goalAttmp,
                                tackleWonD4:data[0].playerData[2].tackleWon,tackleAttmpD4:data[0].playerData[2].tackleAttmp,
                                passesWonD4:data[0].playerData[2].passesWon,passesAttmpD4:data[0].playerData[2].passesAttmp});  

                            const gw4  = this.state.goalWonD4;
                            const gA4 =  this.state.goalAttmpD4;
                            const GoalAcc4 =  Math.round((gw4/gA4)*100);
                            const tw4 = this.state.tackleWonD4;
                            const tA4  = this.state.tackleAttmpD4;
                            const TacklesAcc4 = Math.round((tw4/tA4)*100);
                            const pw4 = this.state.passesWonD4;
                            const pA4 = this.state.passesAttmpD4;
                            const PassesAcc4 = Math.round((pw4/pA4)*100);
                            this.setState({GoalAccuracyweekly4:GoalAcc4,TackleAccuracyweekly4:TacklesAcc4,PassesAccuracyweekly4:PassesAcc4});

                this.setState({goalWonD5:data[0].playerData[3].goalWon,goalAttmpD5:data[0].playerData[3].goalAttmp,
                                tackleWonD5:data[0].playerData[3].tackleWon,tackleAttmpD5:data[0].playerData[3].tackleAttmp,
                                passesWonD5:data[0].playerData[3].passesWon,passesAttmpD5:data[0].playerData[3].passesAttmp}); 
                                
                            const gw5  = this.state.goalWonD5;
                            const gA5 =  this.state.goalAttmpD5;
                            const GoalAcc5 =  Math.round((gw5/gA5)*100);
                            const tw5 = this.state.tackleWonD5;
                            const tA5  = this.state.tackleAttmpD5;
                            const TacklesAcc5 = Math.round((tw5/tA5)*100);
                            const pw5 = this.state.passesWonD5;
                            const pA5 = this.state.passesAttmpD5;
                            const PassesAcc5 = Math.round((pw5/pA5)*100);
                            this.setState({GoalAccuracyweekly5:GoalAcc5,TackleAccuracyweekly5:TacklesAcc5,PassesAccuracyweekly5:PassesAcc5});
                                
                this.setState({goalWonD6:data[0].playerData[4].goalWon,goalAttmpD6:data[0].playerData[4].goalAttmp,
                                tackleWonD6:data[0].playerData[4].tackleWon,tackleAttmpD6:data[0].playerData[4].tackleAttmp,
                                passesWonD6:data[0].playerData[4].passesWon,passesAttmpD6:data[0].playerData[4].passesAttmp});

                            const gw6  = this.state.goalWonD6;
                            const gA6 =  this.state.goalAttmpD6;
                            const GoalAcc6 =  Math.round((gw6/gA6)*100);
                            const tw6 = this.state.tackleWonD6;
                            const tA6  = this.state.tackleAttmpD6;
                            const TacklesAcc6 = Math.round((tw6/tA6)*100);
                            const pw6 = this.state.passesWonD6;
                            const pA6 = this.state.passesAttmpD6;
                            const PassesAcc6 = Math.round((pw6/pA6)*100);
                            this.setState({GoalAccuracyweekly6:GoalAcc6,TackleAccuracyweekly6:TacklesAcc6,PassesAccuracyweekly6:PassesAcc6});
                
                this.setState({goalWonD7:data[0].playerData[5].goalWon,goalAttmpD7:data[0].playerData[5].goalAttmp,
                                tackleWonD7:data[0].playerData[5].tackleWon,tackleAttmpD7:data[0].playerData[5].tackleAttmp,
                                passesWonD7:data[0].playerData[5].passesWon,passesAttmpD7:data[0].playerData[5].passesAttmp});
                                
                            const gw7  = this.state.goalWonD7;
                            const gA7 =  this.state.goalAttmpD7;
                            const GoalAcc7 =  Math.round((gw7/gA7)*100);
                            const tw7 = this.state.tackleWonD7;
                            const tA7  = this.state.tackleAttmpD7;
                            const TacklesAcc7 = Math.round((tw7/tA7)*100);
                            const pw7 = this.state.passesWonD7;
                            const pA7 = this.state.passesAttmpD7;
                            const PassesAcc7 = Math.round((pw7/pA7)*100);
                            this.setState({GoalAccuracyweekly7:GoalAcc7,TackleAccuracyweekly7:TacklesAcc7,PassesAccuracyweekly7:PassesAcc7});
                                
                }
                else
                {
                    toast.error(("Data Is Not Sufficient"), {
                        position: toast.POSITION.TOP_CENTER
                      });
                }
            }
        })              
    }
 }






    render(){
        const name = localStorage.getItem('WVDplayername');
        const matchdate = localStorage.getItem('WVDmatchdate')
        return(
        <div>
             <div> 
             <Col  md={4}>
                <Row md={4}>
                    <Breadcrumb  className="breadWVD">
                       <Breadcrumb.Item href ="/AnalysisDash" >Dashboard</Breadcrumb.Item>
                       <Breadcrumb.Item active>WVD TAB</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
            </Col>
            </div>
            {/* Card of user */}
            <div>
            <Tab.Container  defaultActiveKey="userCard">
             <Row>
                <Col sm={3}>
                    <Card  border="dark" className="CardBodyWVDTab">
                    <Card.Header><h5 className="HeaderWVD">Player Details{' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                    <Card.Body >
                    <Card.Title className="tittleWVD">{name}</Card.Title>
                    <Card.Subtitle className="subtittleWVD">India</Card.Subtitle>  
                    <Card.Text>
                    <p className="MDateWVD">Match Date:-{matchdate}</p> 
                        <DropDownTabsCard
                            GoalAccuracyweekly1    ={this.state.GoalAccuracyweekly1} 
                            TackleAccuracyweekly1  ={this.state.TackleAccuracyweekly1}
                            PassesAccuracyweekly1  ={this.state.PassesAccuracyweekly1}
    
                            GoalAccuracyweekly2    ={this.state.GoalAccuracyweekly2}
                            TackleAccuracyweekly2  ={this.state.TackleAccuracyweekly2}      
                            PassesAccuracyweekly2  ={this.state.PassesAccuracyweekly2}  
    
                            GoalAccuracyweekly3    ={this.state.GoalAccuracyweekly3}
                            TackleAccuracyweekly3  ={this.state.TackleAccuracyweekly3}  
                            PassesAccuracyweekly3  ={this.state.PassesAccuracyweekly3} 
    
                            GoalAccuracyweekly4    ={this.state.GoalAccuracyweekly4}
                            TackleAccuracyweekly4  ={this.state.TackleAccuracyweekly4}  
                            PassesAccuracyweekly4  ={this.state.PassesAccuracyweekly4}  
    
                            GoalAccuracyweekly5    ={this.state.GoalAccuracyweekly5}
                            TackleAccuracyweekly5  ={this.state.TackleAccuracyweekly5}  
                            PassesAccuracyweekly5  ={this.state.PassesAccuracyweekly5} 
    
                            GoalAccuracyweekly6    ={this.state.GoalAccuracyweekly6}
                            TackleAccuracyweekly6  ={this.state.TackleAccuracyweekly6}  
                            PassesAccuracyweekly6  ={this.state.PassesAccuracyweekly6}
    
                            GoalAccuracyweekly7    ={this.state.GoalAccuracyweekly7}
                            TackleAccuracyweekly7  ={this.state.TackleAccuracyweekly7}
                            PassesAccuracyweekly7  ={this.state.PassesAccuracyweekly7}
    
                        />
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                {/* SIDE RENDER TAB  */}
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="userCard">
                           <DropDownTabs

                            GoalAccuracyweekly1    ={this.state.GoalAccuracyweekly1} 
                            TackleAccuracyweekly1  ={this.state.TackleAccuracyweekly1}
                            PassesAccuracyweekly1  ={this.state.PassesAccuracyweekly1}

                            GoalAccuracyweekly2    ={this.state.GoalAccuracyweekly2}
                            TackleAccuracyweekly2  ={this.state.TackleAccuracyweekly2}      
                            PassesAccuracyweekly2  ={this.state.PassesAccuracyweekly2}  

                            GoalAccuracyweekly3    ={this.state.GoalAccuracyweekly3}
                            TackleAccuracyweekly3  ={this.state.TackleAccuracyweekly3}  
                            PassesAccuracyweekly3  ={this.state.PassesAccuracyweekly3}  

                            GoalAccuracyweekly4    ={this.state.GoalAccuracyweekly4}
                            TackleAccuracyweekly4  ={this.state.TackleAccuracyweekly4}  
                            PassesAccuracyweekly4  ={this.state.PassesAccuracyweekly4}  

                            GoalAccuracyweekly5    ={this.state.GoalAccuracyweekly5}
                            TackleAccuracyweekly5  ={this.state.TackleAccuracyweekly5}  
                            PassesAccuracyweekly5  ={this.state.PassesAccuracyweekly5}  

                            GoalAccuracyweekly6    ={this.state.GoalAccuracyweekly6}
                            TackleAccuracyweekly6  ={this.state.TackleAccuracyweekly6}  
                            PassesAccuracyweekly6  ={this.state.PassesAccuracyweekly6}  

                            GoalAccuracyweekly7    ={this.state.GoalAccuracyweekly7}
                            TackleAccuracyweekly7  ={this.state.TackleAccuracyweekly7}
                            PassesAccuracyweekly7  ={this.state.PassesAccuracyweekly7}
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
export default WVDTab;