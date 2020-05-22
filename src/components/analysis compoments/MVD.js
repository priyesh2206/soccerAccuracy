import React from 'react';
import {Card, Button }from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from 'react-datepicker';
import './MVD.css';


class MVD extends React.Component{
  constructor(props){
      super(props);
      this.state={
          StartDate:null,
          playername:''
      }
  }

onhandleChangeDate = date =>{
     this.setState({StartDate:date});
 
}

onhandlePlayerName=(event)=>{
    this.setState({playername:event.target.value});
}

onhandleSubmit=()=>{
    localStorage.setItem('MVDplayername',this.state.playername);
    localStorage.setItem('MVDmatchdate',this.state.StartDate);
}
 

 render(){
     return(
        <div>
           <Card  border="dark" className="CardBodyMVD">
           <Card.Img variant="top" src="assets/images/MVD.jpg" />
            <Card.Body>
                <Card.Title className="CardtextMVD">Analysis Your Accuracy Monthly!</Card.Title>
                <p className="AlertMVD">*Shows monthly data from date that you enter Below!<br></br></p>
                <Card.Text>
                <div>
                  <Form>
                     <FormGroup>
                         <Label htmlFor="playername" className="inputTextMVD"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                         <Input typr="text" id="playername"  name="playername" placeholder="Player Name" onChange={this.onhandlePlayerName} />
                     </FormGroup>
                     <FormGroup>
                         <Label htmlFor="matchdate" className="inputText"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                            &nbsp;&nbsp;
                              <DatePicker
                               placeholderText="MM/DD/YYYY"
                               selected={this.state.StartDate}
                               onChange={this.onhandleChangeDate}
                             />        
                     </FormGroup>
                  </Form>
                 </div>
                 <p className="Alert1MVD">*If regular Data not available then it gives Random 30-days data*</p>
                </Card.Text>
                <Button variant="dark" className="centerMVD" href="/MVDTab" onClick={this.onhandleSubmit} >Show Data</Button>
            </Card.Body>
            </Card>
        </div>
     );
   }
}


export default MVD;