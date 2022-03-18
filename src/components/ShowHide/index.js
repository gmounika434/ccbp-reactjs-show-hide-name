// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstname: false,
    lastname: false,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstname && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {lastname && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
