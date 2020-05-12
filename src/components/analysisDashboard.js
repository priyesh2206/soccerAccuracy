import React from "react"
import {Row,Col,ListGroup,Tab,} from 'react-bootstrap'
import "./analysisDashboard.css"



class AnlysisDashboard extends React.Component{
  render(){

    return(
      <div className="resize">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
             <Col sm={4}>
                <ListGroup>
                    <ListGroup.Item action href="#AYA">
                            <h4>Analysis Your Accuarcy!</h4>
                            <p>
                              *It provide the analysis of yourself on on bases of the data you enter <br></br>like goal Accuarcy,tackles Accuarcy *
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#CWO">
                            <h4>Compare With Other Players</h4>
                            <p>
                              *It Compare your Accuarcy with other Player that your wish to compare <br></br>it sort of one&nbsp;Vs&nbsp;One comparsion
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#MVD">
                    <h4>Montly View</h4>
                            <p>
                              *It give Montly bases view of Accuarcy. if the data is available regular manner <br></br>like week1 week2 week3 and So on..
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#WVD">
                           <h4>Weekly Accuarcy</h4>
                           <p>
                              *It give weekly  bases view of Accuarcy. if the data is available regular manner <br></br>like day1 day2 day3 and So on..
                            </p>
                    </ListGroup.Item>
                    <ListGroup.Item action href="#CWD">
                           <h4>Compare with itself</h4>
                           <p>
                              *It compare the Accuarcy with our own data of different dates ."Every day is not same" <br></br>it sort of SomeDay&nbsp;Vs&nbsp;AthoreDay comparsion
                            </p>
                    </ListGroup.Item>
                </ListGroup>
                      </Col>
                      <Col sm={8}>
                        <Tab.Content>
                          <Tab.Pane eventKey="#AYA">
                          </Tab.Pane>
                          <Tab.Pane eventKey="#CWO">

                          </Tab.Pane>
                          <Tab.Pane eventKey="#MVD">

                          </Tab.Pane>
                          <Tab.Pane eventKey="#WVD">

                          </Tab.Pane>

                          <Tab.Pane eventKey="#CWD">

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