import React from 'react';
import {Card, Button }from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import { toast} from 'react-toastify';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import './DUR.css';


class DUR extends React.Component{
  constructor(props){
      super(props);
      this.state={
          StartDate:null,
          playername:'',
          touched:{
              playername:false
          }
      }
    this.DeleteClick = this.DeleteClick.bind(this);

  }

onhandleChangeDate = date =>{
     this.setState({StartDate:date});
 
}

onhandlePlayerName=(event)=>{
    this.setState({playername:event.target.value});
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


DeleteClick(){
    axios.delete(`http://localhost:5000/deletefull/${this.state.playername}`)
    .then(data=>{
        console.log(data);
        if(data.data.success === true){
          toast.success((data.data.message), {
            position: toast.POSITION.TOP_CENTER
          });
        }
        else{
          toast.error((data.data.message), {
            position: toast.POSITION.TOP_CENTER
          });
        }
    });
}
 


 render(){
     const err = this.validate(this.state.playername)
     return(
        <div>
           <Card  border="dark" className="CardBodyDUR">
           <Card.Img variant="top" src="assets/images/DUR.jpg"/>
            <Card.Body>
                <Card.Title className="CardtextDUR">Analysis Your Accuracy Monthly!</Card.Title>
                <p className="Alert1DUR">*It Delete the Record premanent thst User Added !*</p>
                <Card.Text>
                <div>
                  <Form>
                     <FormGroup>
                         <Label htmlFor="playername" className="inputTextDUR"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                         <Input typr="text" id="playername"  name="playername" placeholder="Player Name" 
                         onChange={this.onhandlePlayerName} 
                         valid={err.playername === ''}
                         invalid={err.playername !== ''}
                         onBlur={this.handleBlur('playername')}
                         />
                         <p className="error">{err.playername}</p>
                     </FormGroup>
                     <br></br>
                     {/* <FormGroup>
                         <Label htmlFor="matchdate" className="inputText"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                            &nbsp;&nbsp;
                              <DatePicker
                               placeholderText="MM/DD/YYYY"
                               selected={this.state.StartDate}
                               onChange={this.onhandleChangeDate}
                             />        
                     </FormGroup> */}
                  </Form>
                 </div>
                </Card.Text>
                <Button variant="dark" className="centerDUR" onClick={this.DeleteClick}>Delete Data</Button>
            </Card.Body>
            </Card>
        </div>
     );
   }
}


export default DUR;