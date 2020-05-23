import React from 'react';
import{Col,Row} from 'reactstrap';
import {ListGroup,Tab,Breadcrumb,Nav,Card} from 'react-bootstrap'
import './AYATab.css';

// improve from here 
const Tabs= (props)=>{
     return (
         <div className ="tabs" >
             <h1>HELLo</h1>
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
             <div classname="col-10 md-col-5 m-1"> 
             <Col  md={4}>
                <Row md={4}>
                    <Breadcrumb>
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
                         <Card.Body >
                            <Card.Title>{name}</Card.Title>
                             <Card.Subtitle>Card Subtitle</Card.Subtitle>
                             <Card.Text>
                            User details,{matchdate}
                             </Card.Text>
                         </Card.Body>
                         </Card>
                  </Col>
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