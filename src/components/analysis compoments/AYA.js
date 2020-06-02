import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from "react-datepicker";
import './AYA.css';

class AYA extends React.Component{

 constructor(props){
     super(props);
     this.state={
        startDate:null,
        playername:'',
        touched:{
            playername:false,
        }
     }
 }

onhandleChangeDate = date =>{
    this.setState({startDate:date});
}

onhandelPlayerName=(event)=>{
    this.setState({playername:event.target.value});
}

onhandleSubmit=()=>{
    localStorage.setItem('AYAplayername',this.state.playername);
    localStorage.setItem('AYAmatchdate',this.state.startDate);
}

handleBlur=(field)=>(evt)=>{
    this.setState({
        touched:{...this.state.touched,[field]:true}
    })
}


validate(playername){
    const err ={
        playername:'',
    }
    if(this.state.touched.playername && playername.length < 2){
        err.playername = "The Playername Field Should Not Be Empty";
    }
    return err;
}

 render(){
     const err = this.validate(this.state.playername);
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
                                  <Input typr="text" id="playername"  name="playername" 
                                    placeholder="Player Name" 
                                    onChange={this.onhandelPlayerName}
                                    valid={err.playername === ''}
                                    invalid={err.playername !== ''}
                                    onBlur={this.handleBlur('playername')} 
                                  />
                                 <p className="error">{err.playername}</p>
                         </FormGroup>
                         <br></br>
                         <FormGroup>
                             <Label htmlFor="matchdate" className="inputText"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                                &nbsp;&nbsp;
                                  <DatePicker
                                   placeholderText="MM/DD/YYYY"
                                   selected={this.state.startDate}
                                   onChange={this.onhandleChangeDate}
                                 /> 
                         </FormGroup>
                    </Form>
               </div>
          </Card.Text>
                <Button variant="dark" className="center" href='/AYATab' onClick={this.onhandleSubmit}>GO Analysis</Button>
        </Card.Body>
        </Card>
     </div>
 );
 }
}

export default AYA;
