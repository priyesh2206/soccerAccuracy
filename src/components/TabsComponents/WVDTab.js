import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import './WVDTab.css';

const DropDownTabs = (props) =>{
    return (
       <div className="tabsWVD">
           <Tab.Container  defaultActiveKey="allAccuracy">
               <DropdownButton  title="Accuracy!"> 
               <Dropdown.Item action eventKey="gAccuracy">Goals Accuracy</Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="tAccuracy">Tackles Accuracy </Dropdown.Item>
               <Dropdown.Divider />
               <Dropdown.Item eventKey="pAccuracy">Passes Accuracy</Dropdown.Item>
               </DropdownButton>
               <Tab.Content>
                   <Tab.Pane eventKey="allAccuracy">
                       <h4>In this all Accuracy will shown in the on graph </h4>
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
            GoalAccuracyweekly:0,
            TackleAccuracyweekly:0,
            PassesAccuracyweekly:0,
        }
    }


    componentDidMount(){
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        if(isLoggedIn){
            fetch(`http://localhost:5000/weekly/${localStorage.getItem('WVDplayername')}`).then(data=>{
                return data.json()
            }).then(data=>{
                console.log(data[0].playerData)
                this.setState({teamname:data[0].teamname,goalWonD1:data[0].goalWon,goalAttmpD1:data[0].goalAttmp,
                              tackleWonD1:data[0].tackleWon,tackleAttmpD1:data[0].tackleAttmp,
                              passesWonD1:data[0].passesWon,passesAttmpD1:data[0].passesAttmp});
                const h=data[0].playerData.length;
                // for(var i=h;i>=0;i--){
                //     this.setState({goalWonD1:data[0].playerData[i].goalWon,goalAttmpD1:data[0].playerData[i].goalAttmp,
                //                    tackleWonD1:data[0].playerData[i].tackleWon,tackleAttmpD1:data[0].playerData[i].tackleAttmp,
                //                    passesWonD1:data[0].playerData[i].playerData[i].passesWon,passesAttmpD1:data[0].playerData[i].passesAttmp}); 
                // }      
                
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
                        {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                <Accordion className ="AccordionGoalWVD">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="green" eventKey="0">
                                        Goals&nbsp;<i class="fab fa-font-awesome-flag"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        GOALS WONS:5<br></br>
                                        <br></br>
                                        GOALS ATTMP:6
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                 </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}

                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}

                                <Accordion className ="AccordionGoalWVD">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="green" eventKey="0">
                                        Tackles&nbsp;<i class="fas fa-running"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Tackles WONS:5<br></br>
                                        <br></br>
                                        Tackles ATTMP:6
                                    </Card.Body>
                                    </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                        {/* -----------------------------------END-------------------------------------------------------------------*/}
                        {/* -----------------------------------ACCORDION Tackles-----------------------------------------------------*/}

                                <Accordion className ="AccordionGoalWVD">
                                    <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="green" eventKey="0">
                                        Passes&nbsp;<i class="fas fa-people-carry"></i>
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Passes WONS:5<br></br>
                                        <br></br>
                                        passes ATTMP:6
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
                           <DropDownTabs/>
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