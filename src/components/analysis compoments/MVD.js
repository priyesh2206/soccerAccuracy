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
          playername:'',
          touched:{
              playername:false
          }
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

handleBlur=(field)=>(evt)=>{
    this.setState({touched:{...this.state.touched,[field]:true}})
}

validate(playername){
    const err = {
        playername:''
    }
    if(this.state.touched.playername && playername.length < 2){
        err.playername = "The Playername Field Should Not Be Empty"
    }
    return err;
}
 

 render(){
     const err = this.validate(this.state.playername)
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
                         <Input typr="text" id="playername"  name="playername" placeholder="Player Name" 
                         onChange={this.onhandlePlayerName} 
                         valid={err.playername === ''}
                         invalid={err.playername !== ''}
                         onBlur={this.handleBlur('playername')}
                         />
                         <p className="error">{err.playername}</p>
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