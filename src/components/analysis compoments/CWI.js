import React from 'react';
import {Card,Button} from "react-bootstrap";
import {Form,FormGroup,Label,Input} from "reactstrap";
import DatePicker from "react-datepicker";
import './CWI.css';



class CWI extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            startDateD1:null,
            startDateD2:null
        }
    }
    handleChangeDateD1 = date=>{
        this.setState({startDateD1:date});
    }

    handleChangeDateD2 = date=>{
        this.setState({startDateD2:date});
    }

render(){
    return(
    <div>
        <Card  border="dark" className="CardBodyCWI">
        <Card.Img variant="top" src="assets/images/CWI.png" />
        <Card.Body>
               <Card.Title className="CardtextCWI">Compare Your Accuracy !</Card.Title>
                <br></br>
               <Card.Text>
                <div>
                <Form>
                    <FormGroup>
                        <Label htmlFor="playername" className="inputTextCWI"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                        <Input typr="text" id="playername"  name="playername" placeholder="Player Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="matchdate1" className="inputTextCWI"><i className="fas fa-calendar-week"></i>&nbsp;Match Date Day-1 - </Label>
                           &nbsp;&nbsp;
                             <DatePicker
                              placeholderText="MM/DD/YYYY"
                              selected={this.state.startDateD1}
                              onChange={this.handleChangeDateD1}
                        />        
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label htmlFor="matchdate2" className="inputTextCWI"><i className="fas fa-calendar-week"></i>&nbsp;Match Date Day-2- </Label>
                           &nbsp;&nbsp;
                             <DatePicker
                              placeholderText="MM/DD/YYYY"
                              selected={this.state.startDateD2}
                              onChange={this.handleChangeDateD2}
                        />        
                    </FormGroup>
                </Form>
                </div>
                </Card.Text>
         <Button variant="dark" className="centerCWI">Go Compare</Button>
         </Card.Body>
         </Card>
    </div>
  );
}
}
export default CWI;