import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

class App extends Component {
  state = {
    hue: Math.round(Math.random() * 360),
    saturation: Math.round(Math.random() * 100),
    light: Math.round(Math.random() * 100),
    value: Math.round(Math.random() * 100),
  }
  changeHue = e => {
    this.setState({
      hue: e.target.value,
    })
    console.log(e.target.value)
  }
  changeSaturation = e => {
    this.setState({
      saturation: e.target.value,
    })
  }
  changeLight = e => {
    this.setState({
      light: e.target.value,
    })
  }
  render() {
    const newColor = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.light}%)`
    console.log(newColor)
    return (
      <>
        <div className="grid-container">
          <div className="header">Color Picker</div>
          <div>
            <div
              className="color-box"
              style={{ backgroundColor: newColor }}
            ></div>
            <text>
              color is currently hsl({this.state.hue},{this.state.saturation}%,{' '}
              {this.state.light}%)
            </text>
          </div>
          <div className="property">H</div>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="360"
              onChange={this.changeHue}
              value={this.state.hue}
              className="slider"
            />
          </div>
          <div className="property">S</div>
          <div className="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              onInput={this.changeSaturation}
              value={this.state.saturation}
              className="slider"
            />
          </div>
          <div className="property">L</div>
          <div className="slidecontainer">
            <input
              type="range"
              min="0"
              value="100"
              onInput={this.changeLight}
              value={this.state.light}
              className="slider"
            />
          </div>
        </div>
      </>
    )
  }
}
export default App
