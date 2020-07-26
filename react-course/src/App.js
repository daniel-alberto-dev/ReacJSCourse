import React, { Component } from "react";
import "./App.css";
import Car from "./Car/Car";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter'

export const clikedContext = React.createContext(false)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cliked: false,
      cars: [
        {name:'Ford Focus', year: 2001},
        {name:'Mercedez', year: 2020},
        {name:'BMW', year: 2020}
      ],
      showCars: false
    }
  }
  
  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})

  }

  deleteCar = (index) => {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)
    this.setState({cars})
  }

  handleShowCars = () => {
    this.setState({showCars: !this.state.showCars})
  }

  render() {

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
            index={index}
            name={car.name}
            year={car.year}
            onChangeName={(event) => this.onChangeName(event.target.value, index) }
            deleteCar={() => this.deleteCar(index)} />
          </ErrorBoundary>
        )
      })
    }
    return (
      <div style={{textAlign:'center'}}>
        <h1>{this.props.title}</h1>

        <clikedContext.Provider value={this.state.cliked}>
           <Counter/>
        </clikedContext.Provider>

        <hr/>
        <button onClick={this.handleShowCars} >Show cars</button>
        <button onClick={() => this.setState({cliked: true})} >Click</button>
        <div style={{
          width:400,
          margin: 'auto',
          paddingTop: '20px'        
        }}>
          {cars}
        </div>
        
      </div>
    );
  }
}

export default App;
