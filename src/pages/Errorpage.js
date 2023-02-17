// import React, { Component } from 'react';
// import axios from 'axios';

// export default class Errorpage extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = { user : {}};
// 	}
// 	componentDidMount(){
// 		axios.get('http://localhost:5000/userdetails/6372836d8f41f6221c3a89cb')
// 		.then(response => {
// 			this.setState({
// 				user: response.data,
// 			})
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		})
// 	}
// 	render(){
// 		return(
// 			<div>
// 				User {this.state.user._id} Already Exists!!!
// 			</div>
// 		)
// 	}
// }

// import React from 'react'
// import { connect } from 'react-redux'
// import { StyledFormButton, StyledButton, ButtonGroup} from '../components/Styles'

// const Errorpage = ({ logoutUser,user }) => {
// 	return(
// 		<div>
// 			<div>
// 			<h3>User <h2>{user.name}</h2>Already Exists!!!</h3></div>




// 			Do u want to <a href={`/EditProfile/${user._id}`}>Edit ur Profile</a>&nbsp;&nbsp;&nbsp;
// 			<a href={`/Schedule/${user._id}`}>View Schedule</a>
// 		</div>
// 	)
    
// }

// const mapStateToProps = ({session}) => ({
//     user: session.user
// })

// export default connect(mapStateToProps, {})(Errorpage);

import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from  'react-router-dom'
import { ButtonGroup, StyledFormButton } from '../components/Styles';

export default class Errorpage extends React.Component {
  constructor(props) {
      

    super(props);
    // this.onEditUser = this.onEditUser.bind(this);
    // this.onDeleteUser = this.onDeleteUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.id=this.props._id;
    this.state = { user: {}};

  }
  componentDidMount() {
    // console.log(this.state.user._id);
    // var id = this.id
    console.log(this.props.id)
    axios.get('https://workout-backend-714h.onrender.com/userdetails/'+this.props.id)
      .then(response => {
        this.setState({
          user: response.data,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <center><h2>User <h1>{this.state.user.username}</h1>Already Exists!!!</h2>&nbsp;</center>
        <div className="form-group"> 
          <h2>Gender: {this.state.user.gender}</h2>
          <h2>Age: {this.state.user.age}</h2>
          <h2>Weight: {this.state.user.weight}</h2>
          <h2>Height: {this.state.user.height}</h2>
          <h2>Unit: {this.state.user.unit}</h2>
        </div>
        <div className="form-group">
          <h2>BMI Score: {this.state.user.bmi}</h2>
          <h2>BMI Category: {this.state.user.bmiCategory}</h2>
        </div>
        <div className="form-group">
          <h2>Basal Metabolic Rate: {this.state.user.bmr}</h2>
          <h2>Acitivity Level: {this.state.user.activity}</h2>
          <h2>Daily Calories (to maintain weight): {this.state.user.dailycalories}</h2>
          <h2>Daily Calories (to lose weight): {this.state.user.dailycalories - 500}</h2>
          <h2>Daily Calories (to gain weight): {this.state.user.dailycalories + 500}</h2>
        </div>
        <div >
			&nbsp;
			<center><h1>Do you want to</h1></center>
		<a href={`/EditProfile/${this.props.id}`} style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={'/Home'} style={{width: '300px'}}>Edit Profile</StyledFormButton></ButtonGroup></a>
		<a href={`/Schedule/${this.props.id}`}style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={'/Home'} style={{width: '300px'}}>View Workouts</StyledFormButton></ButtonGroup></a>

        </div>
		&nbsp;
      </div>
    )
  }
}