// import React from 'react'
// import { useState, useEffect } from 'react';
// import { Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import Recipes from './Recipes';
// import Favorites from './Favorites';
// import Calories from './Calories';
// import MealPlanning from './MealPlanning';
// import Fit from '../pages/Fit'
// import ExerciseDetail from '../pages/ExerciseDetail'
// import Fitcalculation from '../pages/Fitcalculation'
// import './Fit.css'
// import Macro from '../pages/Macro';
// import Main from '../pages/Main';
// import AuthRoute from '../components/AuthRoute'
// import BasicRoute from '../components/BasicRoute'
// import { connect } from 'react-redux';
// import Header from './Header';

// import Login from '../pages/Login'
// import Signup from '../pages/Signup'




// const Pages = () => {
//     const [scroll, setScroll] = useState(0); // used in header to apply background color on scroll
//   const [isMenuOpened, setIsMenuOpened] = useState(false);
//   const [showLoadingScreen, setShowLoadingScreen] = useState(true);

//   useEffect(() => {
//     document.addEventListener('scroll', () => {
//       setScroll(window.scrollY);
//     })
//   }, [])
//     return (
//         <>
//         <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
//         <Router>
//         <Switch>
//             <Route path="/Home"><Home /></Route>
//             <Route path="/Calories" ><Calories /></Route>
//             <Route path="/Home/Meal-planning" ><MealPlanning /></Route>
//             <Route path="/Fit"><Fit /></Route>
//             <Route path="/exercise/:id"><ExerciseDetail /></Route>
//             <Route path="/FitCalculation"><Fitcalculation /></Route>
//             <Route path="/macros-calculator"><Macro /></Route>
//         </Switch>
//         </Router>
//         </>
        
//   )
// }
// const mapStateToProps = ({session}) => ({
//     user: session.user
// })

// export default connect(mapStateToProps, {})(Pages);
import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Workout from '../pages/Workout'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import Schedule from '../pages/Schedule'
import EditProfile from '../pages/EditProfile'
import Errorpage from '../pages/Errorpage'
import ExerciseDetail from '../pages/ExerciseDetail'

const Pages = () => {
    const [scroll, setScroll] = useState(0); // used in header to apply background color on scroll
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [showLoadingScreen, setShowLoadingScreen] = useState(true);
    // const [a,seta] = useState(0)
    useEffect(() => {
      document.addEventListener('scroll', () => {
        setScroll(window.scrollY);
      })
    }, [])

    // const [a,seta]=useState(1);
    
   

    


  return (
    <>
        <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
        <BrowserRouter>
            <Switch>
            <Route path="/Workout/:name/:id" render={(props) => (<Workout name={props.match.params.name} id={props.match.params.id} a={props.match.params.a}/>)}></Route>                 
            <Route path="/Schedule/:id" render={(props) => (<Schedule id={props.match.params.id} a={props.match.params.a}/>)}></Route>
            <Route path="/EditProfile/:id" render={(props) => (<EditProfile id={props.match.params.id} a={props.match.params.a}/>)}></Route>
            <Route path="/Errorpage/:id" render={(props) => (<Errorpage id={props.match.params.id} a={props.match.params.a}/>)}></Route>
            <Route path="/exercise/:id"><ExerciseDetail /></Route>
            </Switch>
        </BrowserRouter>
        <Footer setIsMenuOpened={setIsMenuOpened} />

        </>
  )
}

const mapStateToProps = ({session}) => ({
    user: session.user
})

export default connect(mapStateToProps, {})(Pages);