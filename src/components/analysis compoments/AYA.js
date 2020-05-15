import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from "react-datepicker";
import './AYA.css';

class AYA extends React.Component{

 constructor(props){
     super(props);
     this.state={
        startDate:null
     }
 }

handleChangeDate = date =>{
    this.setState({startDate:date});
}



 render(){
 return(
     <div>
        <Card  border="dark" className="CardBody">
           <Card.Img variant="top" src="assets/images/AYA.png" />
           <Card.Body>
                  <Card.Title className="Cardtext">Analysis Your Accuracy !</Card.Title>
                  <br></br>
           <Card.Text>
                <div>
                    <Form>
                          <FormGroup>
                             <Label htmlFor="playername" className="inputText"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                                  <Input typr="text" id="playername"  name="playername" placeholder="Player Name" />
                         </FormGroup>
                         <br></br>
                         <FormGroup>
                             <Label htmlFor="matchdate" className="inputText"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                                &nbsp;&nbsp;
                                  <DatePicker
                                   placeholderText="MM/DD/YYYY"
                                   selected={this.state.startDate}
                                   onChange={this.handleChangeDate}
                                 />        
                         </FormGroup>
                    </Form>
               </div>
          </Card.Text>
                <Button variant="dark" className="center" href="/AYATab">GO Analysis</Button>
                  </Card.Body>
        </Card>
     </div>
 );
 }
}

export default AYA;
