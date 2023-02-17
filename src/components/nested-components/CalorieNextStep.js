import React from 'react'
import Ad from '../Ad/Ad'
import scaleImg from '../../assets/calculationImg/img/aa-scale.jpg'
import myFitnessPalImg from '../../assets/calculationImg/img/MyFitnessPal_Logo.png'
import digitalScaleImg from '../../assets/calculationImg/img/aa-digital-scale.jpg'
import fitbitImg from '../../assets/calculationImg/img/aa-fitbit-charge.png'
import './CalorieNextStep.css'

const CalorieNextStep = () => {
  return (
    <div className="container-960">
         <div className="row">
            <div className="col-sm-12">
              <center><h2>Next Steps</h2></center>
              <p style={{marginTop:'18px'}}>If you are looking to gain or lose weight, you need to know that a pound of fat is about 3,500 calories. Most people are going to want to lose
              or gain that weight sustainably, at a rate of about 1 lb a week. That works out to 500 calories a day (500 x 7 = 3500). So take your Calorie and subtract
              500 from it to lose weight and add 500 to gain weight.
              </p>
              <p style={{marginTop:'18px'}}>Everyone is different, though, so it's also important that once you have your estimate Calorie to track what you are eating and your weight. If you are losing or
              gaining or staying the same, you will want to know how much you have eaten and adjust accordingly. To help you with keeping track of what you are eating and your
              weight, we've listed some essential tools below.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <center><h2 style={{marginTop:'18px'}}>Essential tools for gaining or losing weight:</h2></center>
            </div>
          </div>
          <div className="row">
            <center><Ad link="https://www.amazon.com/Ozeri-Digital-Multifunction-Kitchen-Elegant/dp/B004164SRA//ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=createahomegy-20&linkId=ffb81d6d1131129a0c549e812596a1f5"
              image={scaleImg} title="Kitchen Scale"
              alt="A kitchen scale">
              </Ad></center>Losing or gaining weight requires knowing how much you are eating. This <a href="https://www.amazon.com/Ozeri-Digital-Multifunction-Kitchen-Elegant/dp/B004164SRA//ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=createahomegy-20&linkId=ffb81d6d1131129a0c549e812596a1f5">bestselling digital kitchen scale</a> makes knowing that a breeze.
            
              <center><Ad link="https://www.amazon.com/Etekcity-Digital-Bathroom-Technology-Elegant/dp/B00F3J9G1W//ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=createahomegy-20&linkId=9ea94b3f68e824dfd9f031c8bd0d00c8"
              image={digitalScaleImg}
              title="Digital Scale"
              alt="A digital scale"
              style={{marginTop:'18px'}} >
              </Ad></center>To keep track of whether you are gaining, losing, or maintaining your weight, you need a scale! <a href="https://www.amazon.com/Etekcity-Digital-Bathroom-Technology-Elegant/dp/B00F3J9G1W//ref=as_li_ss_tl?ie=UTF8&linkCode=ll1&tag=createahomegy-20&linkId=9ea94b3f68e824dfd9f031c8bd0d00c8">This one</a> is highly-reviewed and accurate.
            
          </div>
          {/* <div >
          <center><Ad link="//myfitnesspal.com"
              image={myFitnessPalImg}
              title="MyFitnessPal App"
              alt="MyFitnessPal log" >              
            </Ad></center>This <a href="//myfitnesspal.com">app and website</a> has a huge amount of nutrition information for foods. Once you know how much you need to eat, MyFitnessPal will help
              you track it.
            <center><Ad link="https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?th=1&linkCode=ll1&tag=createahomegy-20&linkId=100ee607b4ea3abe14d81c6659db54e1"
              image={fitbitImg}
              title="Fitbit Charge 2 Fitness Tracker"
              alt="Fitbit Charge 2 fitness tracker" >             
            </Ad></center> If you want a more high-tech way to get your TDEE, invest in a fitness tracker. <a href="https://www.amazon.com/Fitbit-Charge-Heart-Fitness-Wristband/dp/B01K9S260E/ref=as_li_ss_tl?th=1&linkCode=ll1&tag=createahomegy-20&linkId=100ee607b4ea3abe14d81c6659db54e1">FitBit</a>, with its constant heart rate monitoring, provides a decent
              estimate of your daily calories burned.
          </div> */}
    </div>      
  )
}

export default CalorieNextStep