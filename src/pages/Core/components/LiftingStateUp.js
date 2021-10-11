import React, { Component } from 'react'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>水会沸腾.</p>;
  }
  return <p>水不会沸腾.</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in { scaleNames[scale] }:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// 转换温度
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default class LiftingStateUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 'c',
      temperature: ''
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange (value) {
    this.setState({
      scale: 'c',
      temperature: value
    })
  }

  handleFahrenheitChange (value) {
    this.setState({
      scale: 'f',
      temperature: value
    })
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput scale="c" temperature={ celsius } onTemperatureChange={ this.handleCelsiusChange } />
        <TemperatureInput scale="f" temperature={ fahrenheit } onTemperatureChange={ this.handleFahrenheitChange } />

        <BoilingVerdict celsius={ parseFloat(celsius) } />
      </div>
    )
  }
}
