import React from 'react'
import { Link } from 'react-router-dom'
import './Fitcalculation.css';
import oneRepMaxImg from '../assets/calculationImg/img/one-rep-max.jpg'
import oneRepMaxSvg from '../assets/calculationImg/img/one-rep-max.svg'
import macrosImg from '../assets/calculationImg/img/macros.jpg'
import macrosSvg from '../assets/calculationImg/img/macros.svg'
import tdeeImg from '../assets/calculationImg/img/tdee.jpg'
import tdeeSvg from '../assets/calculationImg/img/tdee.svg'
import programPickerImg from '../assets/calculationImg/img/program-picker.jpg'
import programPickerSvg from '../assets/calculationImg/img/program-picker.svg'
import targetHeartRateImg from '../assets/calculationImg/img/target-heart-rate.jpg'
import targetHeartRateSvg from '../assets/calculationImg/img/target-heart-rate.svg'

function Fitcalculation(props) {
  return (
    <div className="container-960">
      <center><h1 style={{marginTop: '25px'}}>Fitness Calculations</h1></center>
      <center><p className="lead" style={{fontSize: '22px'}}>
      Sometimes a little bit of math can help you achieve your goals! This site aims to simplify
      some common calculations you might need to know in your fitness journey.
      </p></center>
      <div className="row">
        {/* <div className="col-sm-6">
          <Link to="/tdee-calculator" style={{textDecoration: 'none'}}>
            <div className="intro-block-img" style={{backgroundImage: `url(${tdeeImg})`}}>
              <div className="intro-block mod-tdee">
                <h1 style={{textDecoration: 'none'}} >TDEE</h1>
                <img src={tdeeSvg} className="intro-block-icon" alt="An icon of a show" />
                <h2 style={{textDecoration: 'double'}}>A calculator to find your Total Daily Energy Expenditure, or how many calories you
                burn in a day, based on your own body metrics and activity level. This is useful for people
                looking to gain or lose weight.</h2>
              </div>
            </div>
          </Link>
        </div> */}
        <div className="col-sm-6" style={{marginTop: '25px'}}>
          <Link to="/onerep" style={{textDecoration: 'none'}}>
            <div className="intro-block-img" style={{backgroundImage: `url(${oneRepMaxImg})`}}>
              <div className="intro-block mod-max">
                <h1>One Rep Max</h1>
                <img src={oneRepMaxSvg} className="intro-block-icon" alt="An icon of a bicep curling a dumbbell" />
                <h2>A calculator to find your one-rep weightlifting max. This is useful for people who
                can't safely test their one-rep max and need that value to measure their progress or to follow
                a specific weightlifting program.</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to="/macros-calculator" style={{textDecoration: 'none'}}>
            <div className="intro-block-img" style={{backgroundImage: `url(${macrosImg})`}}>
              <div className="intro-block mod-macros">
                <h1>Macros</h1>
                <img src={macrosSvg} className="intro-block-icon" alt="An icon of a plate, knife, and fork" />
                <h2>A calculator that takes your total calorie needs and the percentages of each macronutrient you
                want and gives you their value in grams.</h2>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to="/target-heart-rate" style={{textDecoration: 'none'}}>
            <div className="intro-block-img" style={{backgroundImage: `url(${targetHeartRateImg})`}}>
              <div className="intro-block mod-heart-rate">
                <h1>Target Heart Rate</h1>
                <img src={targetHeartRateSvg} className="intro-block-icon" alt="An icon of a heart" />
                <h2>Find your maximum recommended heart rate and then your target heart rates, used as a guide
                to follow for different fitness goals.</h2>
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="col-sm-12">
          <Link to="/program-picker">
            <div className="intro-block-img" style={{backgroundImage: `url(${programPickerImg})`}}>
              <div className="intro-block mod-program-picker">
                <h1>Program Picker (Coming soon!)</h1>
                <img src={programPickerSvg} className="intro-block-icon" alt="An icon of a barbell" />
                <h2>A set of questions to help you find a weightlifting program that fits your goals, with links to
                resources on the program that it finds for you.</h2>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default Fitcalculation
