import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import './AYATab.css';

// improve from here 
const Tabs = (props) =>{
     return (
         <div className="tabs">
            <DropdownButton  title="Accuarcy!"> 
            <Dropdown.Item eventKey="1">Goals Accuarcy</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Tackles Accuarcy </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="3">Passes Accuarcy</Dropdown.Item>
            </DropdownButton>
            <p>In this all Accuarcy will shown in the on graph </p>
            <br></br>
            <p>The dropdown will contain all the inividual Accuarcy</p>
         </div>
      
     )
}



class AYATab extends React.Component{
    constructor(props){
        super(props);
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
                    <Card.Header><h5 className="Header">Player Details{' '}<i class="fas fa-scroll"></i></h5></Card.Header>
                    <Card.Body >
                    <Card.Title className="tittle">{name}</Card.Title>
                    <Card.Subtitle className="subtittle">India</Card.Subtitle>  
                    <Card.Text>

                        {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                                <Accordion className ="AccordionGoal">
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

                                <Accordion className ="AccordionGoal">
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

                                <Accordion className ="AccordionGoal">
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
                           <Tabs/>
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