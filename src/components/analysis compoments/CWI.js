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
            startDateD2:null,
            playername:'',
        }
    }
    onhandleChangeDateD1 = date=>{
        this.setState({startDateD1:date});
    }

    onhandleChangeDateD2 = date=>{
        this.setState({startDateD2:date});
    }

    onhandlePlayerName=(event)=>{
        this.setState({playername:event.target.value});
    }

    onhandleSubmit=()=>{
        localStorage.setItem('CWIplayername',this.state.playername);
        localStorage.setItem('CWImatchdateD1',this.state.startDateD1);
        localStorage.setItem('CWImatchdateD2',this.state.startDateD2);
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
                        <Input typr="text" id="playername"  name="playername" placeholder="Player Name"  onChange={this.onhandlePlayerName}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="matchdate1" className="inputTextCWI"><i className="fas fa-calendar-week"></i>&nbsp;Match Date Day-1 - </Label>
                           &nbsp;&nbsp;
                             <DatePicker
                              placeholderText="MM/DD/YYYY"
                              selected={this.state.startDateD1}
                              onChange={this.onhandleChangeDateD1}
                        />        
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label htmlFor="matchdate2" className="inputTextCWI"><i className="fas fa-calendar-week"></i>&nbsp;Match Date Day-2- </Label>
                           &nbsp;&nbsp;
                             <DatePicker
                              placeholderText="MM/DD/YYYY"
                              selected={this.state.startDateD2}
                              onChange={this.onhandleChangeDateD2}
                        />        
                    </FormGroup>
                </Form>
                </div>
                </Card.Text>
         <Button variant="dark" className="centerCWI" href="/CWITab" onClick={this.onhandleSubmit} >Go Compare</Button>
         </Card.Body>
         </Card>
    </div>
  );
}
}
export default CWI;