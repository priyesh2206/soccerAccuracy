import  React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody} from 'mdbreact';
import DatePicker from "react-datepicker";
import { toast} from 'react-toastify';
import axios from 'axios';
import './playerdetails.css';
import "react-datepicker/dist/react-datepicker.css";




toast.configure();

class PlayerDetails extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
        startDate:null,
        playername:'',
        teamname:'',
        goalWon:'',
        goalAttmp:'',
        tackleWon:'',
        tackleAttmp:'',
        passesWon:'',
        passesAttmp:'',
        timestamp:''
      };
     this.handleInputChange = this.handleInputChange.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.onResetForm = this.onResetForm.bind(this);
    }

    getFormattedDate=(date)=>{
      var year = date.getFullYear();
    
      var month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : '0' + month;
    
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      
      return  day + '-' + month + '-' + year;
    }


  handleChangeDate = date => {
      this.setState({startDate: date});
     
    };

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }

  onResetForm(){
    this.setState({...this.state,
      startDate:null,
      playername:'',
      teamname:'',
      goalWon:'',
      goalAttmp:'',
      tackleWon:'',
      tackleAttmp:'',
      passesWon:'',
      passesAttmp:'',
      timestamp:''})
  }

  onSubmit(){
    const date = this.state.startDate;
    const finalADate = this.getFormattedDate(date); 
    const newplayerDetails = {
      playername:this.state.playername,
      teamname:this.state.teamname,
      matchdate:finalADate,
      goalWon:this.state.goalWon,
      goalAttmp:this.state.goalAttmp,
      tackleWon:this.state.tackleWon,
      tackleAttmp:this.state.tackleAttmp,
      passesWon:this.state.passesWon,
      passesAttmp:this.state.passesAttmp,
    }
    console.log(newplayerDetails);
    axios.post("http://localhost:5000/api/users/playerDetail",newplayerDetails).then(data=>{
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
    this.onResetForm();
  }
  



render(){
  console.log(this.props.isUserLoggedIn)
return(
  <div>
    {this.props.isUserLoggedIn?
    <div className="Card1 ">
         <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody  className="shadow-box-example z-depth-5 ">
              <form>
                <p className="h3 text-center py-4">Player Details <i className="fas fa-futbol"></i></p>
               {/* input one */}
                <label
                  htmlFor="playername"
                  className="black-text font-weight-light"
                >
                 <i className="fa fa-user"></i>&nbsp; Player Name
                </label>
                 <input
                  type="text"
                  id="playername"
                  name="playername"
                  value={this.state.playername}
                  className="form-control"
                  onChange={this.handleInputChange}
                 
                />
                {/* input one end */}
                <br />
                {/* input second */}
                <label
                  htmlFor="teamname"
                  className="g-text font-weight-light"
                >
                  <i className="fas fa-users"></i> &nbsp;Team Name 
                </label>
                <input
                  type="text"
                  id="teamname"
                  className="form-control"
                  name="teamname"
                  value={this.state.teamname}
                  onChange={this.handleInputChange}
                />
                {/* input second end */}
                <br/>
                {/* input threee */}
                <label
                  htmlFor="matchdate"
                  className="dark-text font-weight-light"
                >
                 <i className="fas fa-calendar-week"></i>&nbsp; Match Date
                </label>
                <div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeDate}
                />

                </div>
                {/* input three end */}
                <br/>
                {/* input four */}
                <label
                  htmlFor="goalWon"
                  className="dark-text font-weight-light"
                >
                Goal-Scored!
                </label>
                <input
                  type="number"
                  id="goalWon"
                  className="form-control"
                  name="goalWon"
                  value={this.state.goalWon}
                  onChange={this.handleInputChange}
                />
                {/*input four end */}
                <br/>
                {/* input five  */}
                <label
                  htmlFor="goalAttmp"
                  className="dark-text font-weight-light"
                >
                Goal-Attempted
                </label>
                <input
                  type="number"
                  id="goalAttmp"
                  className="form-control"
                  name="goalAttmp"
                  value={this.state.goalAttmp}
                  onChange={this.handleInputChange}
                />
                {/* input five end */}
                <br/>
                {/* input six  */}
                <label
                  htmlFor="tackleWon"
                  className="dark-text font-weight-light"
                >
                Tackles-Won!
                </label>
                <input
                  type="number"
                  id="tackleWon"
                  className="form-control"
                  name="tackleWon"
                  value={this.state.tackleWon}
                  onChange={this.handleInputChange}
                />
                {/* input six end */}
                <br/>
                {/* input seven  */}
                <label
                  htmlFor="tackleAttmp"
                  className="dark-text font-weight-light"
                >
                Tackles-Attempted
                </label>
                <input
                  type="number"
                  id="tackleAttmp"
                  className="form-control"
                  name="tackleAttmp"
                  value={this.state.tackleAttmp}
                  onChange={this.handleInputChange}
                />
                {/* input seven end */}
                <br/>
                {/* input eight  */}
                <label
                  htmlFor="passesWon"
                  className="dark-text font-weight-light"
                >
                Passes-Won!
                </label>
                <input
                  type="number"
                  id="passesWon"
                  className="form-control"
                  name="passesWon"
                  value={this.state.passesWon}
                  onChange={this.handleInputChange}
                />
                {/* input eight end */}
                <br/>
                {/* input nine  */}
                <label
                  htmlFor="passesAttmp"
                  className="dark-text font-weight-light"
                >
                Passes-Attempted
                </label>
                <input
                  type="number"
                  id="passesAttmp"
                  className="form-control"
                  name="passesAttmp"
                  value={this.state.passesAttmp}
                  onChange={this.handleInputChange}
                />
                {/* input nine end */}
                <div className="display">
                <div className="text-center py-4 mt-3 display ">
                  <MDBBtn className="btn btn-outline-purple" type="" onClick={this.onSubmit}>
                    ADD Details&nbsp;&nbsp;
                    <i className="fa fa-user-plus"></i>
                  </MDBBtn>
                </div>
                <div className="text-center py-4 mt-3 display">
                  <MDBBtn className="btn btn-outline-purple" href="/AnalysisDash" type="submit">
                   Anlaysis&nbsp;&nbsp;
                   <i className="fa fa-diagnoses"></i>
                  </MDBBtn>
                </div>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>:null
    }
    </div>
)


}

}
export default PlayerDetails;

