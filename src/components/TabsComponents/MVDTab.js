import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import './MVDTab.css';

const DropDownTabs = (props) =>{
    return (
       <div className="tabsMVD">
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


class MVDTab extends React.Component{

    constructor(props){
        super(props);

    }
       render(){
        const name = localStorage.getItem('MVDplayername');
        const matchdate = localStorage.getItem('MVDmatchdate')
        return(
        <div>
             <div> 
             <Col  md={4}>
                <Row md={4}>
                    <Breadcrumb  className="breadMVD">
                       <Breadcrumb.Item href ="/AnalysisDash" >Dashboard</Breadcrumb.Item>
                       <Breadcrumb.Item active>MVD TAB</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
            </Col>
            </div>
            {/* Card of user */}
            <div>
            <Tab.Container  defaultActiveKey="userCard">
             <Row>
                <Col sm={3}>
                    <Card  border="dark" className="CardBodyMVDTab">
                    <Card.Header><h5 className="HeaderMVD">Player Details{' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                    <Card.Body >
                    <Card.Title className="tittleMVD">{name}</Card.Title>
                    <Card.Subtitle className="subtittleMVD">India</Card.Subtitle>  
                    <Card.Text>
                    <p className="MDateMVD">Match Date:-{matchdate}</p>
                        {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                <Accordion className ="AccordionGoalMVD">
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

                                <Accordion className ="AccordionGoalMVD">
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

                                <Accordion className ="AccordionGoalMVD">
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

export default MVDTab;