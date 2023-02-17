import React, { Component } from 'react';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.workoutdate}</td>
    <td>{props.exercise.exercisename}</td>
    <td>{props.exercise.type}</td>
    <td>{props.exercise.category}</td>
    <td>{props.exercise.discription}</td>
    {/* <td>{(props.exercise.progressionId) ? "" : "Yes"}</td>&nbsp;&nbsp; */}
    {/* <td>
      <Link to={"/exercise/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      &nbsp;&nbsp;</td> */}
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)
    this.state = {exercises: []};
  }

  componentDidMount(id) {
    console.log(this.props.id)
      axios.get('https://workout-backend-714h.onrender.com/exercises/'+this.props.id)
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('https://workout-backend-714h.onrender.com/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>&nbsp;
        <center><h1>Workout Schedule</h1></center>
        <center>        
        <main className="meal-planning-samples">
        <table>
        <thead>
              <tr className="heading-row">
              <td>WorkOut Date</td>
              <td>Exercise Name</td>
              <td>Type</td>
              <td>Category</td>
              <td>Discription</td>
              </tr>
          </thead>
          <tbody className="plan-row">
          
            {this.exerciseList()}
                           
          </tbody>
        </table>
           
        </main>
        </center>
        &nbsp;
      </div>
    )
  }
}