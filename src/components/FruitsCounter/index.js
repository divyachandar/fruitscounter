// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {bananaCount: 0, mangoCount: 0}

  onEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-app-container">
        <div className="fruits-counter-container">
          <h1 className="header">
            Bob ate <span className="counter">{mangoCount}</span> mangoes{' '}
            <span className="counter">{bananaCount} </span> bananas
          </h1>
          <div className="fruits-gallery">
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="fruit-img"
              />
              <div className="btn-container">
                <button
                  className="btn-fruit"
                  type="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="fruit-img"
              />
              <div className="btn-container">
                <button
                  className="btn-fruit"
                  type="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
