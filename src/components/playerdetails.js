import  React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import './playerdetails.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class PlayerDetails extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
        startDate:null
      };

    }
  onhandleChange = date => {
      this.setState({
        startDate: date,
        playername:'',
        teamname:'',
        date:'',
        goalWon:'',
        goalAttmp:'',
        trackleWon:'',
        trackleAttmp:'',
        passesWon:'',
        passesAttmp:'',
        timestamp:''
        


      });
    };

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
                  className="form-control"

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
                />
                {/* input second end */}
                <br/>
                {/* input threee */}
                <label
                  htmlFor="data"
                  className="dark-text font-weight-light"
                >
                 <i className="fas fa-calendar-week"></i>&nbsp; Match Date
                </label>
                <div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
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
                />
                {/* input five end */}
                <br/>
                {/* input six  */}
                <label
                  htmlFor="trackleWon"
                  className="dark-text font-weight-light"
                >
                Trackles-Won!
                </label>
                <input
                  type="number"
                  id="trackleWon"
                  className="form-control"
                />
                {/* input six end */}
                <br/>
                {/* input seven  */}
                <label
                  htmlFor="trackleAttmp"
                  className="dark-text font-weight-light"
                >
                Trackles-Attempted
                </label>
                <input
                  type="number"
                  id="trackleAttmp"
                  className="form-control"
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
                />
                {/* input nine end */}
                <div className="display">
                <div className="text-center py-4 mt-3 display ">
                  <MDBBtn className="btn btn-outline-purple" type="">
                    ADD Details&nbsp;&nbsp;
                    <i className="fa fa-user-plus"></i>
                  </MDBBtn>
                </div>
                <div className="text-center py-4 mt-3 display">
                  <MDBBtn className="btn btn-outline-purple" href="/playerAccuracy" type="submit">
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

