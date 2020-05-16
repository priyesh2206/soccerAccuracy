import React from 'react';
import {Card, Button }from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from 'react-datepicker';
import './MVD.css';


class MVD extends React.Component{
  constructor(props){
      super(props);
      this.state={
          StartDate:null
      }
  }
  handleChangeDate = date =>{
     this.setState({StartDate:date});
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
                         <Input typr="text" id="playername"  name="playername" placeholder="Player Name" />
                     </FormGroup>
                     <FormGroup>
                         <Label htmlFor="matchdate" className="inputText"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                            &nbsp;&nbsp;
                              <DatePicker
                               placeholderText="MM/DD/YYYY"
                               selected={this.state.StartDate}
                               onChange={this.handleChangeDate}
                             />        
                     </FormGroup>
                  </Form>
                 </div>
                 <p className="Alert1MVD">*If regular Data not available then it gives Random 30-days data*</p>
                </Card.Text>
                <Button variant="dark" className="centerMVD" href="/MVDTab">Show Data</Button>
            </Card.Body>
            </Card>
        </div>
     );
   }
}


export default MVD;