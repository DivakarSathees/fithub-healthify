import React from 'react'
import { connect } from 'react-redux'
import { StyledFormButton, StyledButton, ButtonGroup} from '../components/Styles'

const Workuser = ({ logoutUser,user }) => {
    
    

  return (
    <div>
        {/* <ButtonGroup> */}
        <a href={`/Workout/${user.name}/${user._id}`} style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={`/Workout/${user.name}/${user._id}`} style={{width: '300px'}}>Enroll For Workouts</StyledFormButton></ButtonGroup></a>
        {/* </ButtonGroup> */}
        <a href={`/EditProfile/${user._id}`} style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={'/Home'} style={{width: '300px'}}>Edit Profile</StyledFormButton></ButtonGroup></a>
        <a href={`/Schedule/${user._id}`}style={{textDecoration:'none'}}><ButtonGroup><StyledFormButton to={'/Home'} style={{width: '300px'}}>View Workouts</StyledFormButton></ButtonGroup></a>
        
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