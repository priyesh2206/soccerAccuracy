import React from "react"
import {Row,Col,ListGroup,Tab,Breadcrumb} from 'react-bootstrap'
import AYA from './analysis compoments/AYA';
import CWO from './analysis compoments/CWO';
import DUR from './analysis compoments/DUR';
import WVD from './analysis compoments/WVD';
import CWI from './analysis compoments/CWI';
import "./analysisDashboard.css"



class AnlysisDashboard extends React.Component{
  render(){

    return(
      <div className="resize">
        <Tab.Container defaultActiveKey="#link1">
            <Row>
             <Col sm={4}>
                <Breadcrumb className="bread">
                       <Breadcrumb.Item href ="/playerDetails">Add Detail</Breadcrumb.Item>
                       <Breadcrumb.Item active>Analysis Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <br></br>
                <ListGroup>
                    <ListGroup.Item action href="#AYA">
                            <h4>Analysis Your Accuracy!</h4>
                            <p>
                              *It provide the analysis of yourself on on bases of the data you enter <br></br>like goal Accuracy,tackles Accuracy *
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#CWO">
                            <h4>Compare With Other Players</h4>
                            <p>
                              *It Compare your Accuracy with other Player that your wish to compare <br></br>it sort of one&nbsp;Vs&nbsp;One comparsion
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#WVD">
                           <h4>Weekly Accuracy</h4>
                           <p>
                              *It give weekly  bases view of Accuracy. if the data is available regular manner <br></br>like day1 day2 day3 and So on..
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#CWI">
                           <h4>Compare itself</h4>
                           <p>
                              *It compare the Accuracy with our own data of different dates ."Every day is not same" <br></br>it sort of SomeDay&nbsp;Vs&nbsp;Another Day comparsion
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#DUR">
                    <h4>DELETE RECORD</h4>
                            <p>
                              *It Allows you to delete the records permanent that you have Added !!<br></br>* it's dangerous Opreation :-)
                            </p>
                    </ListGroup.Item>
                </ListGroup>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="#AYA">
                            <AYA/>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#CWO">
                            <CWO/>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#DUR">
                             <DUR/>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#WVD">
                             <WVD/>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#CWI">
                            <CWI/>
                          </Tab.Pane>
                        </Tab.Content>
              </Col>
            </Row>
        </Tab.Container>
       </div>
    )
     }
}

export default AnlysisDashboard;