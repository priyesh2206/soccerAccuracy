import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from 'react-datepicker';
import "./WVD.css";



class WVD extends React.Component{
   
    constructor(props){
        super(props);
        this.state ={
            startDate:null
        }
    }
 handleChangeDate = date =>{
     this.setState({startDate:date});
 }
 render(){
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
                      <Input typr="text" id="playername"  name="playername" placeholder="Player Name" />
                  </FormGroup>
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
              <p className="Alert1WVD">*If regular Data not available then it gives Random 07-days data*</p>
             </Card.Text>
             <Button variant="dark" className="centerWVD" href="/WVDTab">Show Data</Button>
         </Card.Body>
         </Card>
     </div>
     );
 }




}
export default WVD;
