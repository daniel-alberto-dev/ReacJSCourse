import React, { Component } from "react";
import "./Car.scss";
import whithClass from '../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends Component {

  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if(this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }

  render() {

    const inputClasses = ['input'];

    if (this.props.name !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }
    return (
     <>
        <h3>
          model <strong>{this.props.name}</strong>
        </h3>
        <p>
          Year <strong>{this.props.year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          value={this.props.name}
          onChange={this.props.onChangeName}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.deleteCar}>Delete</button>
        <button onClick={this.props.deleteCar}>Click</button>
     </>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  deleteCar: PropTypes.func,
  onChangeName: PropTypes.func
}

export default whithClass(Car, 'car') 
