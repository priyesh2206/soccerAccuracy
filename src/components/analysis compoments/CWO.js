import React from 'react';
import {Card,Button,CardColumns} from 'react-bootstrap';
import {Form,FormGroup,Label,Input} from 'reactstrap';
import DatePicker from "react-datepicker";
import './CWO.css';




class CWO extends React.Component{

 constructor(props){
 super(props);
 this.state={
    startDateP1:null,
    startDateP2:null,
    playername1:'',
    playername2:'',
    touched:{
        playername1:'',
        playername2:''
    }
 }
}
 
onhandleChangeDatep1 = date=>{
    this.setState({startDateP1:date})
}

onhandleChangeDatep2 = date=>{
    this.setState({startDateP2:date})
}

onhandlePlayerName1=(event)=>{
   this.setState({playername1:event.target.value});
}

onhandlePlayername2=(event)=>{
   this.setState({playername2:event.target.value});
}

onhandleSubmit=()=>{
  localStorage.setItem('CWOplayername1',this.state.playername1);   
  localStorage.setItem('CWOmatchdateP1',this.state.startDateP1);
  localStorage.setItem('CWOplayername2',this.state.playername2);
  localStorage.setItem('CWOmatchdateP2',this.state.startDateP2);

}

handleBlur=(field)=>(evt)=>{
    this.setState({touched:{...this.state.touched,[field]:true}})
}

validate(playername1,playername2){
    const err ={
        playername1:'',
        playername2:''        
    }

    if(this.state.touched.playername1 && playername1.length < 2){
        err.playername1 = "The Playername Field Should Not Be Empty"
    }
    
    if(this.state.touched.playername2 && playername2.length < 2){
        err.playername2 = "The Playername Field Should Not Be Empty"
    }
    return err;
}

 render(){
    const err  = this.validate(this.state.playername1,this.state.playername2)
    return(
        <div>
            <CardColumns>
                {/* CARD og player One */}
           <Card  border="dark" className="CardBodyCWO">
                <Card.Img variant="top" src="assets/images/CWO.jpg" />
                <Card.Header className="CardtextCWO">Compare Your Analysis !</Card.Header>
                <Card.Body>
                          <Card.Title className="CardtextCWO">Player - 1</Card.Title>
                   <Card.Text>
                        <div>
                            <Form>
                                  <FormGroup>
                                     <Label htmlFor="playername1" className="inputTextCWO"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                                          <Input typr="text" id="playername1"  name="playername1" placeholder="Player Name 1"  
                                          onChange={this.onhandlePlayerName1}
                                          valid = {err.playername1 === ''}
                                          invalid = {err.playername1 !== ''}
                                          onBlur={this.handleBlur('playername1')}
                                          />
                                          <p className="error">{err.playername1}</p>
                                 </FormGroup>
                                 <FormGroup>
                                     <Label htmlFor="matchdate1" className="inputTextCWO"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                                        &nbsp;&nbsp;
                                          <DatePicker
                                           placeholderText="MM/DD/YYYY"
                                           selected={this.state.startDateP1}
                                           onChange={this.onhandleChangeDatep1}
                                         />        
                                 </FormGroup>
                            </Form>
                       </div>
                    </Card.Text>
                </Card.Body>
        </Card>
        {/* Card of player One ends */}
        {/* card of player Two  */}
        <Card  border="dark" className="CardBodyCWO1">
            <Card.Img variant="top" src="assets/images/CWO.jpg" />
            <Card.Header className="CardtextCWO">Compare Your Analysis !</Card.Header>
            <Card.Body>
                <Card.Title className="CardtextCWO">Player - 2</Card.Title>
                     <Card.Text>
                        <div>
                              <Form>
                                <FormGroup>
                                    <Label htmlFor="playername2" className="inputTextCWO"><i className="fa fa-user"></i>&nbsp; Player Name</Label>
                                         <Input typr="text" id="playername2"  name="playername2" placeholder="Player Name 2"
                                          onChange={this.onhandlePlayername2}
                                          valid={err.playername2 === ''}
                                          invalid={err.playername2 !== ''}
                                          onBlur={this.handleBlur('playername2')}
                                          />
                                          <p className="error">{err.playername2}</p>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="matchdate2" className="inputTextCWO"><i className="fas fa-calendar-week"></i>&nbsp;Match Date - </Label>
                                       &nbsp;&nbsp;
                                         <DatePicker
                                          placeholderText="MM/DD/YYYY"
                                          selected={this.state.startDateP2}
                                          onChange={this.onhandleChangeDatep2}
                                        />        
                                </FormGroup>
                              </Form>
                        </div>
                     </Card.Text>
            </Card.Body>
        </Card>
        {/* card of player two ends */}
 </CardColumns>
         <div className="vs">
             <h1 className="vstextS"><strong>Vs</strong></h1>
         </div>
         <div className="CWOButt">
        <Button variant="dark" href="/CWOTab" onClick={this.onhandleSubmit}>Go Compare</Button>
        </div>
 </div>

    );
 }

}
export default CWO;