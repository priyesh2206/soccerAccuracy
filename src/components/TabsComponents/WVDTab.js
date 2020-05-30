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