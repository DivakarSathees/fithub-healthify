import './App.scss';
import { BrowserRouter, Route, Router,Switch } from 'react-router-dom';
import Pages from './components/Pages';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { ScrollProvider } from './context/Scroll'
import { RecipesProvider } from './context/Recipes'
import { FavoritesProvider } from './context/Favorites'
import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Main from './pages/Main'
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import Home from './components/Home';
import MealPlanning from './components/MealPlanning';
import Recipes from './components/Recipes';
import Calories from "./components/Calories";
import Favorites from "./components/Favorites";
import Fitcalculation from './pages/Fitcalculation'
import Macro from './pages/Macro'
import Workout from './pages/Workout'
import {StyledContainer} from './components/Styles'
import Createuser from './pages/Createuser'
import ViewUser from './pages/ViewUser'
import Workuser from './pages/Workuser';
import Schedule from './pages/Schedule';
import Errorpage from './pages/Errorpage';
import PasswordReset from './pages/PasswordReset';
import Emailsent from './pages/Emailsent';
import ForgottenPassword from './pages/ForgottenPassword';
import EditProfile from './pages/EditProfile';
import Fit from './pages/Fit';
import ExerciseDetail from './pages/ExerciseDetail';
import './components/Fit.css'
import Onerep from './pages/Onerep';
import HeartRate from './pages/HeartRate';



const App = (checked) => {
  const [scroll, setScroll] = useState(0); // used in header to apply background color on scroll
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    })
  }, [])

  return (
    <div className="App" onLoad={() => setShowLoadingScreen(false)}>
      
      <BrowserRouter> {/* BrowserRouter allows routing between children elements */}
        {checked && (
        <ScrollProvider>
          <RecipesProvider>
            <FavoritesProvider>
              
              <Switch >
              <BasicRoute path="/passwordreset/:userId/:resetString"><StyledContainer><PasswordReset /></StyledContainer></BasicRoute>
              <BasicRoute path="/forgottenpassword"><StyledContainer><ForgottenPassword /></StyledContainer></BasicRoute>
              <BasicRoute path="/emailsent/:userEmail?/:reset?"><StyledContainer><Emailsent /></StyledContainer></BasicRoute>

             <BasicRoute path="/login"><StyledContainer><Login /></StyledContainer></BasicRoute>
            <BasicRoute path="/signup" ><Signup /></BasicRoute>
            <AuthRoute path="/Home" >
            <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Home />
              <Footer setIsMenuOpened={setIsMenuOpened} />
              </AuthRoute>
            <Route path="/Recipes">
            <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Recipes />
              <Footer setIsMenuOpened={setIsMenuOpened} />
              </Route>
            <Route path="/Meal-planning">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <MealPlanning />
              <Footer setIsMenuOpened={setIsMenuOpened} /></Route>
            <Route path="/Calories">
            <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Calories />
              <Footer setIsMenuOpened={setIsMenuOpened} /></Route>
            <Route path="/Favorites">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Favorites />
              <Footer setIsMenuOpened={setIsMenuOpened} /></Route> 
              <Route path="/FitCalculation">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Fitcalculation />
              <Footer setIsMenuOpened={setIsMenuOpened} /></Route>
              <Route path="/Fit">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Fit />
              <Footer setIsMenuOpened={setIsMenuOpened} /></Route> 
              <AuthRoute path="/exercise/:id">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <ExerciseDetail />
              <Footer setIsMenuOpened={setIsMenuOpened} /></AuthRoute> 
              <AuthRoute path="/macros-calculator">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Macro />
              <Footer setIsMenuOpened={setIsMenuOpened} /></AuthRoute>
              <AuthRoute path="/onerep">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Onerep />
              <Footer setIsMenuOpened={setIsMenuOpened} /></AuthRoute>
              <AuthRoute path="/target-heart-rate">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <HeartRate />
              <Footer setIsMenuOpened={setIsMenuOpened} /></AuthRoute>
              {/* <Route path="/Schedule/:id">
                <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
                <Schedule/>
                <Footer setIsMenuOpened={setIsMenuOpened} />
              </Route> */}
              <Route path="/Schedule/:id" render={(props) => (<Pages id={props.match.params.id} a={props.match.params.a}/>)}></Route>

              <Route path="/Errorpage/:id" render={(props) => (<Pages id={props.match.params.id} a={props.match.params.a}/>)}></Route>
              {/* <Route path="/EditProfile">
                <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
                <EditProfile/>
                <Footer setIsMenuOpened={setIsMenuOpened} />
              </Route> */}
              <Route path="/EditProfile/:id" render={(props) => (<Pages id={props.match.params.id} a={props.match.params.a}/>)}></Route>


              <Route path="/workuser">
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Workuser />
              <Footer setIsMenuOpened={setIsMenuOpened} />
              </Route>
              {/* <AuthRoute>
              <Header scroll={scroll} isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
              <Route path="/Workout/:name/:id" render={(props) => (<Workout name={props.match.params.name} id={props.match.params.id}/>)}/><Footer setIsMenuOpened={setIsMenuOpened} /></AuthRoute> */}
              <Route path="/Workout/:name/:id" render={(props) => (<Pages name={props.match.params.name} id={props.match.params.id} a={props.match.params.a}/>)}></Route>

              
              {/* <Route path="/user/profile/:id" render={(props) => (<ViewUser id={props.match.params.id}/>)}></Route> */}

            
              

              <Route path="/" ><StyledContainer><Main /></StyledContainer></Route>

            </Switch>              
              {showLoadingScreen && <LoadingScreen />}
            </FavoritesProvider>
          </RecipesProvider>
        </ScrollProvider>
        )} 
      </BrowserRouter>
      
    </div>
  );
}
const mapStateToProps = ({session}) => ({
  checked: session.checked
})

export default 
connect(mapStateToProps)
(App);
// export default App