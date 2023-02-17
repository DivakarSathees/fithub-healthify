import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ScrollContext } from '../../context/Scroll'
import { logoutUser } from '../../auth/actions/userActions';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


const MenuItems = ({ setIsMenuOpened,logoutUser,user,a=1}) => {
  const navigate = useHistory();
  const location = useLocation();

  const { samePageScroll } = useContext(ScrollContext);

  const handleMenuItemClick = () => {
  // scrolls top if already on clicked page
  console.log(user._id);
    window.scrollTo(0, 0)
    setIsMenuOpened(false)
  }

  // router doesn't re-scroll to contact if already on home page
  // so a re scroll is triggered by update scroll context which 
  // triggers a useEffect in Home page component to re-scroll
  const handleContactClick = () => {
    if (location.pathname === "/" && location.search === "?to=Contact") samePageScroll()
    
    setIsMenuOpened(false)
  }
  const increase = () => {
    a=1
    console.log(a)
  }
  
  return (
      <>
          <a href="/Fit" onClick={handleMenuItemClick}>Exercises</a>
          <a href="/FitCalculation" onClick={handleMenuItemClick}>FitCalculator</a>
          <a href="/Recipes" onClick={handleMenuItemClick}>Recipes</a>
          <a href="/Calories" onClick={handleMenuItemClick}>Calories</a>
          <a href="/Meal-planning" onClick={handleMenuItemClick}>Meal planning</a>
          {/* <Link to={`/?to=Contact`} onClick={handleContactClick}>Contact</Link> */}
          {/* <a href={`/Workout/${user.name}/${user._id}`} onClick={increase}>Workout</a> */}
          <a href='/workuser'>Workout</a>

          <Link to='#' onClick={()=>logoutUser(navigate)}>Logout</Link>


      </>
  )
}
const mapStateToProps = ({session}) => ({
  user: session.user
})

export default connect(mapStateToProps, {logoutUser})(MenuItems)