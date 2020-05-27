import React from 'react';
import{Col,Row} from 'reactstrap';
import {Tab,Breadcrumb,Card,Accordion,Button,Dropdown,DropdownButton} from 'react-bootstrap'
import './CWITab.css';

// --------------------------------------------DROPDOWN LIST FOR PLAYER ON ONE DATE -----------------------------------------------------------------//
const DropDownTabs1 = (props) =>{
  return (
    <div>
     <div className="tabsCWI">
         <Tab.Container  defaultActiveKey="allAccuarcy">
             <DropdownButton  title="Accuarcy!"> 
             <Dropdown.Item action eventKey="gAccuarcy">Goals Accuarcy</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="tAccuarcy">Tackles Accuarcy </Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="pAccuarcy">Passes Accuarcy</Dropdown.Item>
             </DropdownButton>
             <Tab.Content>
                 <Tab.Pane eventKey="allAccuarcy">
                     <h4>In this all Accuarcy will shown in the on graph </h4>
                 </Tab.Pane>
                 <Tab.Pane eventKey="gAccuarcy">
                     <h1>Goal Accuarcy</h1>
                 </Tab.Pane>
                 <Tab.Pane eventKey="tAccuarcy">
                     <h1>Tackle Accuarcy</h1>
                 </Tab.Pane>
                 <Tab.Pane eventKey="pAccuarcy">
                     <h1>passes Accuarcy</h1>
                 </Tab.Pane>
             </Tab.Content>
         </Tab.Container>
         </div>
     </div>
  );
}

//--------------------------------------------DROPDOWN LIST FOR PLAYER ON ANOTHER DATE---------------------------------------------------------------//

const DropDownTabs2 = (props) =>{
  return (
    <div>
     <div className="tabsCWI">
         <Tab.Container  defaultActiveKey="allAccuarcy">
             <DropdownButton  title="Accuarcy!"> 
             <Dropdown.Item action eventKey="gAccuarcy">Goals Accuarcy</Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="tAccuarcy">Tackles Accuarcy </Dropdown.Item>
             <Dropdown.Divider />
             <Dropdown.Item eventKey="pAccuarcy">Passes Accuarcy</Dropdown.Item>
             </DropdownButton>
             <Tab.Content>
                 <Tab.Pane eventKey="allAccuarcy">
                     <h4>In this  Accuarcy compare will shown in the on graph </h4>
                 </Tab.Pane>
                 <Tab.Pane eventKey="gAccuarcy">
                     <h1>Goal Accuarcy D-2</h1>
                 </Tab.Pane>
                 <Tab.Pane eventKey="tAccuarcy">
                     <h1>Tackle Accuarcy D-2</h1>
                 </Tab.Pane>
                 <Tab.Pane eventKey="pAccuarcy">
                     <h1>passes Accuarcy D-2</h1>
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
  }

  render(){
    const name=localStorage.getItem('CWIplayername')
    const m1=localStorage.getItem('CWImatchdateD1')
    const m2=localStorage.getItem('CWImatchdateD2')
      return(
        <div>
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
               <Card.Header><h5 className="HeaderCWI">Player Details {' '}<i class="fas fa-scroll"></i></h5></Card.Header>
               <Card.Body >
               <Card.Title className="tittleCWI">{name}</Card.Title>
               <Card.Subtitle className="subtittleCWI">India</Card.Subtitle>  
               <Card.Text>
                <p className="MDateCWI">MatchDate:{m1}</p>

                   {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                           <Accordion className ="AccordionGoalCWI">
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

                           <Accordion className ="AccordionGoalCWI">
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

                           <Accordion className ="AccordionGoalCWI">
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
                      <DropDownTabs1/>
                   </Tab.Pane>
               </Tab.Content>
           </Col>
        </Row>
        </Tab.Container>
        </div>
{/*--------------------------------------------CARD TWO-----------------------------------CARD TWo -----------------------------------CARD TWo-------------------------------------- */}
        <div>
        <div>
       <Tab.Container  defaultActiveKey="userCard">
        <Row>
        <Col sm={8}>
          {/* SIDE RENDER TAB  */}
               <Tab.Content>
                   <Tab.Pane eventKey="userCard">
                      <DropDownTabs2/>
                   </Tab.Pane>
               </Tab.Content>
           </Col>
           <Col sm={3}>
               <Card  border="dark" className="CardBodyCWITab">
               <Card.Header><h5 className="HeaderCWI">Player Details {' '}<i class="fas fa-scroll"></i></h5></Card.Header>
               <Card.Body >
               <Card.Title className="tittleCWI">{name}</Card.Title>
               <Card.Subtitle className="subtittleCWI">India</Card.Subtitle>  
               <Card.Text>
               <p className="MDateCWI">MatchDate:{m2}</p>

                   {/* -----------------------------------ACCORDION GOALS-------------------------------------------------------*/}
                           <Accordion className ="AccordionGoalCWI">
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

                           <Accordion className ="AccordionGoalCWI">
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

                           <Accordion className ="AccordionGoalCWI">
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
        </Row>
        </Tab.Container>
        </div>
      </div>
   </div>
      );
  }
}

export default CWITab;