import React from 'react';
import {Card,Button,CardDeck,CardColumns} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from "react-datepicker";
import './CWO.css';




class CWO extends React.Component{

 constructor(props){
 super(props);
 this.state={
    startDateP1:null,
    startDateP2:null

 }
}
 
 handleChangeDatep1 = date=>{
    this.setState({startDateP1:date})
 }
 handleChangeDatep2 = date=>{
    this.setState({startDateP2:date})
 }
 render(){

    return(
        <div>
            <CardColumns>
                {/* CARD og player One */}
           <Card  border="dark" className="CardBodyCWO">
                <Card.Img variant="top" src="assets/images/CWO.jpg" />
                <Card.Header className="CardtextCWO">Compare Your Analysis !</Card.Header>
                <Card.Body>
                          <Card.Title className="CardtextCWO">Player - 1</Card.Title>
                   <Card.Text>
                        <div>
                            <Form>
                                  <FormGroup>
                                     <Label htmlFor="playername1" className="inputTextCWO"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                                          <Input typr="text" id="=playername1"  name="playername1" placeholder="Player Name 1" />
                                 </FormGroup>
                                 <FormGroup>
                                     <Label htmlFor="matchdate1" className="inputTextCWO"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                                        &nbsp;&nbsp;
                                          <DatePicker
                                           placeholderText="MM/DD/YYYY"
                                           selected={this.state.startDateP1}
                                           onChange={this.handleChangeDatep1}
                                         />        
                                 </FormGroup>
                            </Form>
                       </div>
                    </Card.Text>
                </Card.Body>
        </Card>
        {/* Card of player One ends */}
        {/* card of player Two  */}
        <Card  border="dark" className="CardBodyCWO1">
            <Card.Img variant="top" src="assets/images/CWO.jpg" />
            <Card.Header className="CardtextCWO">Compare Your Analysis !</Card.Header>
            <Card.Body>
                <Card.Title className="CardtextCWO">Player - 2</Card.Title>
                     <Card.Text>
                        <div>
                              <Form>
                                <FormGroup>
                                    <Label htmlFor="playername2" className="inputTextCWO"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                                         <Input typr="text" id="=playername2"  name="playername2" placeholder="Player Name 2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="matchdate2" className="inputTextCWO"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                                       &nbsp;&nbsp;
                                         <DatePicker
                                          placeholderText="MM/DD/YYYY"
                                          selected={this.state.startDateP2}
                                          onChange={this.handleChangeDatep2}
                                        />        
                                </FormGroup>
                              </Form>
                        </div>
                     </Card.Text>
            </Card.Body>
        </Card>
        {/* card of player two ends */}
 </CardColumns>
         <div className="vs">
             <h1 className="vstextS"><strong>Vs</strong></h1>
         </div>
         <div className="CWOButt">
        <Button variant="dark">Go Compare</Button>
        </div>
 </div>

    );
 }

}
export default CWO;