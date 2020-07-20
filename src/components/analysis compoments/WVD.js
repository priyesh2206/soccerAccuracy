import React from 'react';
import DatePicker from 'react-datepicker';
import {Card,Button} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import "./WVD.css";



class WVD extends React.Component{
   
    constructor(props){
        super(props);
        this.state ={
            startDate:null,
            playername:'',
            touched:{
                playername:''
            }
        }
    }

onhandleChangeDate = date =>{
     this.setState({startDate:date});
}

onhandlePlayerName=(event)=>{
    this.setState({playername:event.target.value});
 }

onhandleSubmit=()=>{
     localStorage.setItem('WVDplayername',this.state.playername);
     localStorage.setItem('WVDmatchdate',this.state.startDate)
}

handleBlur=(field)=>(evt)=>{
    this.setState({touched:{...this.state.touched,[field]:true}})
}

validate(playername){
    const err = {
        playername:''
    }
    if(this.state.touched.playername && playername.length < 2){
      err.playername ="The Playername Field Should Not Be Empty"
    }
    return err;
}


 render(){
     const err = this.validate(this.state.playername)
     return(
        <div>
        <Card  border="dark" className="CardBodyWVD">
        <Card.Img variant="top" src="assets/images/WVD.jpg" />
         <Card.Body>
             <Card.Title className="CardtextWVD">Analysis Your Accuracy Weekly!</Card.Title>
             <p className="AlertWVD">*Shows weekly data from date that you enter Below!<br></br></p>
             <Card.Text>
             <div>
               <Form>
                  <FormGroup>
                      <Label htmlFor="playername" className="inputTextWVD"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
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
                            selected={this.state.startDate}
                            onChange={this.onhandleChangeDate}
                      />        
                  </FormGroup>
               </Form>
              </div>
              <p className="Alert1WVD">*If regular Data not available then it gives Random 07-days data*</p>
             </Card.Text>
             <Button variant="dark" className="centerWVD" href="/WVDTab" onClick={this.onhandleSubmit}>Show Data</Button>
         </Card.Body>
         </Card>
     </div>
     );
 }




}
export default WVD;
