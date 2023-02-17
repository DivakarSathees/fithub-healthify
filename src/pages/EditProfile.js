import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';


class EditUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeUnit = this.onChangeUnit.bind(this);
    this.onChangeActivity = this.onChangeActivity.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
    this.calculateBMICategory = this.calculateBMICategory.bind(this);
    this.calculateBMR = this.calculateBMR.bind(this);
    this.calculateDailyCalories = this.calculateDailyCalories.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userid:'',
      username: '',
      gender: 'Male',
      age: 0,
      weight: 0,
      height: 0,
      unit: 'Metric',
      activity: 'Sedentary',
      bmi: 0,
      bmiCategory: '',
      bmr: 0,
      dailycalories: 0,
      user:[]
    }
  }

  componentDidMount() {
    var uid='633716acc63913080eb369ff';
    axios.get('https://workout-backend-714h.onrender.com/userdetails/'+this.props.id)
      .then(response => {
        this.setState({
          user: response.data,
          userid: response.data.userid,
          username: response.data.username,
          gender: response.data.gender,
          age: response.data.age,
          weight: response.data.weight,
          height: response.data.height,
          unit: response.data.unit,
          activity: response.data.activity,
          bmi: response.data.bmi,
          bmiCategory: response.data.bmiCategory,
          bmr: response.data.bmr,
          dailycalories:response.data.dailycalories,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeGender(e) {
    this.setState({
        gender: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
        age: e.target.value
    })
  }

  onChangeWeight(e) {
    this.setState({
        weight: e.target.value
    })
  }

  onChangeHeight(e) {
    this.setState({
        height: e.target.value
    })
  }

  onChangeUnit(e) {
    this.setState({
        unit: e.target.value
    })
  }

  onChangeActivity(e) {
    this.setState({
        activity: e.target.value
    })
  }

  calculateBMI = () => {
    let w = 0, h = 0, bmi = 0;
    if(this.state.unit === "Metric"){
        h = this.state.height;
        w = this.state.weight;
    } else if (this.state.unit === "Imperial"){
        h = this.state.height*2.54;
        w = this.state.weight/2.2;
    }
    bmi = w/(h*h)*10000;
    this.setState({
        bmi: bmi.toFixed(1)
    });
    return bmi;
  }

  calculateBMICategory = (bmi) => {
    let bmiCategory = '';
    if(bmi === 0){
      bmiCategory = "";
    } else if (bmi <= 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi <= 24.9) {
      bmiCategory = "Normal Weight";
    } else if (bmi <= 29.9) {
      bmiCategory = "Overweight";
    } else if (bmi >= 30) {
      bmiCategory = "Obesity";
    }
    this.setState({
      bmiCategory: bmiCategory
    });
    return bmiCategory;
  }

  calculateBMR = () => {
    let w = 0, h = 0, bmr = 0;
    if(this.state.unit === "Metric"){
        h = this.state.height;
        w = this.state.weight;
    } else if (this.state.unit === "Imperial"){
        h = this.state.height*2.54;
        w = this.state.weight/2.2;
    }
    if(this.state.gender === "Male"){
        bmr = (h*6.25) + (w*9.99) - (this.state.age*4.92) + 5;
      } else if (this.state.gender === "Female"){
        bmr = (h*6.25) + (w*9.99) - (this.state.age*4.92) - 161;
      }
      this.setState({
          bmr: bmr.toFixed(0)
      });
      return bmr;
  }

  calculateDailyCalories = (bmr) => {
    let dailycalories = 0;
    if(this.state.activity === "Sedentary"){
      dailycalories = bmr*1.2;
    } else if (this.state.activity === "Light Exercise"){
      dailycalories = bmr*1.375;
    } else if (this.state.activity === "Moderate Exercise"){
      dailycalories = bmr*1.55;
    } else if (this.state.activity === "Heavy Exercise"){
      dailycalories = bmr*1.725;
    } else if (this.state.activity === "Athlete"){
      dailycalories = bmr*1.9;
    }
    this.setState({
      dailycalories: dailycalories.toFixed(0)
    });
  }

  updateDetails = () => {
    let bmi = this.calculateBMI();
    this.calculateBMICategory(bmi);
    let bmr = this.calculateBMR();
    this.calculateDailyCalories(bmr);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props.id);

    const user = {
      // userid: '633716acc63913080eb369ff',
      username: this.state.username,
      gender: this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height,
      unit: this.state.unit,
      activity: this.state.activity,
      bmi: this.state.bmi,
      bmiCategory: this.state.bmiCategory,
      bmr: this.state.bmr,
      dailycalories: this.state.dailycalories
    }
    this.state.user=user;

    // console.log(user.state.data.age);
    console.log(this.props.id);

    axios.put('https://workout-backend-714h.onrender.com/userdetails/update/'+this.props.id, {
      age:this.state.age,
      gender: this.state.gender,
      weight: this.state.weight,
      height: this.state.height,
      unit: this.state.unit,
      activity: this.state.activity,
      bmi: this.state.bmi,
      bmiCategory: this.state.bmiCategory,
      bmr: this.state.bmr,
      dailycalories: this.state.dailycalories
    })
    // .then(raw => raw.json())
      .then(res => {
        window.location='/workuser'
      })
      .catch(err => {console.log(err)})

    // window.location = '/user/profile/633716acc63913080eb369ff';
    
  }

  render() {
    return (
      // <div>
      //   <h3>Edit User</h3>
      //   <form onSubmit={this.onSubmit}>
      //     <div className="form-group"> 
      //       <label>Username: </label>
      //       <h2> {this.state.username} </h2>
      //     </div>
      //     <div className="form-group"> 
      //       <label>Gender: </label>
      //       <select ref="userInput"
      //           required
      //           className="form-control"
      //           value={this.state.gender}
      //           onChange={this.onChangeGender}>
      //               <option value="Male">Male</option>
      //               <option value="Female">Female</option>
      //               <option value="Others">Others</option>            
      //       </select>
      //     </div>
      //     <div className="form-group"> 
      //       <label>Age: </label>
      //       <input  type="number"
      //           required
      //           className="form-control"
      //           value={this.state.age}
      //           onChange={this.onChangeAge}
      //           />
      //     </div>
      //     <div className="form-group"> 
      //       <label>Weight: </label>
      //       <input  type="number"
      //           required
      //           className="form-control"
      //           value={this.state.weight}
      //           onChange={this.onChangeWeight}
      //           />
      //     </div>
      //     <div className="form-group"> 
      //       <label>Height: </label>
      //       <input  type="number"
      //           required
      //           className="form-control"
      //           value={this.state.height}
      //           onChange={this.onChangeHeight}
      //           />
      //     </div>
      //     <div className="form-group"> 
      //       <label>Unit: </label>
      //       <select ref="userInput"
      //           required
      //           className="form-control"
      //           value={this.state.unit}
      //           onChange={this.onChangeUnit}>
      //               <option value="Metric">Metric</option>
      //               <option value="Imperial">Imperial</option>         
      //       </select>
      //     </div>
      //     <div className="form-group"> 
      //       <label>Activity: </label>
      //       <select ref="userInput"
      //           required
      //           className="form-control"
      //           value={this.state.activity}
      //           onChange={this.onChangeActivity}>
      //               <option value="Sedentary">Sedentary</option>
      //               <option value="Light Exercise">Light Exercise</option>
      //               <option value="Moderate Exercise">Moderate Exercise</option>
      //               <option value="Heavy Exercise">Heavy Exercise</option>
      //               <option value="Athlete">Athlete</option>         
      //       </select>
      //     </div>
      //     <div className="form-group"> 
      //       <h2>BMI: {this.state.bmi} Category: {this.state.bmiCategory}</h2>
      //       <h2>BMR: {this.state.bmr}</h2>
      //       <h2>Daily Calories: {this.state.dailycalories} </h2>
      //       <button type="button" onClick={() => this.updateDetails()}>Update Details</button>
      //     </div>
      //     <div className="form-group">
      //       <input type="submit" value="Update User" className="btn btn-primary" />
      //     </div>
      //   </form>
      // </div>
      <div>
      <form className="calculator-container" onSubmit={this.onSubmit}>
                <div className="field-group">
                    <div className="input-group">
                        <label htmlFor="age">Age</label>
                        <input  type="number"
                                        required
                                        className="form-control"
                                        onChange={this.onChangeAge}
                                        value={this.state.age}
                />                    </div>

                    <div className="input-group">
                        <label htmlFor="gender">Gender</label>
                        <div className="radio-group" required
                        value={this.state.gender}
                        onChange={this.onChangeGender}>
                            <input type="radio" id="male" name="gender" value="Male" required/>
                            <label htmlFor="Male">Male</label>
                            <input type="radio" id="female" name="gender" value="Female" required />
                            <label htmlFor="Female">Female</label>
                        </div>
                    </div>
                </div>

                <div className="field-group">
                    <div className="input-group">
                        <label htmlFor="height">Height</label>
                        <input type="number" max="230" min="130" name="height" required 
                        placeholder="130 - 230" value={this.state.height}
                        onChange={this.onChangeHeight} />
                        <span>cm</span>
                    </div>
                    <div className="input-group">
                        <label htmlFor="weight">Weight</label>
                        <input  type="number"
                required
                className="form-control"
                value={this.state.weight}
                onChange={this.onChangeWeight}
                />
                        <span>kg</span>
                    </div>
                </div>

                <div className="input-group">
                    <label htmlFor="activity">Activity</label>
                    <select ref="userInput"
                required
                className="form-control"
                value={this.state.activity}
                onChange={this.onChangeActivity}>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Light Exercise">Light Exercise</option>
                    <option value="Moderate Exercise">Moderate Exercise</option>
                    <option value="Heavy Exercise">Heavy Exercise</option>
                    <option value="Athlete">Athlete</option>         
            </select>
                    <span className="select-btn">{`>`}</span>
                </div>
                <div className="input-group">
                    <label htmlFor="activity">Program</label>
                    <select ref="userInput"
                required
                className="form-control"
                value={this.state.activity}
                onChange={this.onChangeActivity}>
                    <option value="Maintain weight">Maintain weight</option>
                    <option value="Mild weight loss<h6> 0.25 kg / week">Mild weight loss<h6> 0.25 kg / week</h6></option>
                    <option value="Weight loss 0.50 kg / week">Weight loss 0.50 kg / week</option>
                    <option value="Extreme weight loss 1 kg / week">Extreme weight loss 1 kg / week</option>
                    <option value="Mild weight gain 0.25 kg / week">Mild weight gain 0.25 kg / week</option> 
                    <option value="Weight gain 0.50 kg / week">Weight gain 0.50 kg / week</option><option value="Extreme weight gain 1 kg / week">Extreme weight gain 1 kg / week</option>        
            </select>
                    <span className="select-btn">{`>`}</span>
                </div>
                <div className="field-group">
                <div className="input-group">
                        <label htmlFor="Unit">Unit</label>
                        <div className="radio-group" required
                        value={this.state.unit}
                        onChange={this.onChangeUnit}>
                            <input type="radio" id="Metric" name="Unit" value="Metric" required/>
                            <label htmlFor="Metric">Metric</label>
                            <input type="radio" id="Imperial" name="Unit" value="Imperial" required />
                            <label htmlFor="Imperial">Imperial</label>
                        </div>
                    </div>
                    </div>
                <div className="calculator-buttons">
                    
                    <button type="submit" onClick={() => this.updateDetails()}>
                        <i className="fa-solid fa-circle-chevron-right" />
                        <span>UpDate</span>
                    </button>
                </div>
                <div className="field-group"> 
                <div className="input-group">
            <h2>BMI: {this.state.bmi} </h2><h2>Category: {this.state.bmiCategory}</h2>
            <h2>BMR: {this.state.bmr}</h2>
            <h2>Daily Calories: {this.state.dailycalories} </h2></div>
            {/* <button type="button" onClick={() => this.updateDetails()}>Update Details</button> */}
          </div>
          </form>
          &nbsp;
          </div>
    )
  }
}
const mapStateToProps = ({session}) => ({
  user: session.user
})
export default connect(mapStateToProps, {})(EditUser);