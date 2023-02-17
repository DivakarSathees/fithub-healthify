import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledFormButton, StyledButton, ButtonGroup} from '../components/Styles'

const Workuser = ({ logoutUser,user }) => {
    
    

  return (
    <div>
        {/* <ButtonGroup> */}
        <Link to={`/Workout/${user.name}/${user._id}`} style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={`/Workout/${user.name}/${user._id}`} style={{width: '300px'}}>Enroll For Workouts</StyledFormButton></ButtonGroup></Link>
        {/* </ButtonGroup> */}
        <Link to={`/EditProfile/${user._id}`} style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={'/Home'} style={{width: '300px'}}>Edit Profile</StyledFormButton></ButtonGroup></Link>
        <Link to={`/Schedule/${user._id}`}style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={'/Home'} style={{width: '300px'}}>View Workouts</StyledFormButton></ButtonGroup></Link>
        
        <div>
            &nbsp;
        </div>
    </div>
  )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {})(Workuser);