import React from 'react'
import GuesserContainer from './GuesserContainer'
import ChooserContainer from './ChooserContainer'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      player: null
    }
  }

  selectGuesser() {
    this.setState({ player: "guesser" })
  }

  selectChooser() {
    this.setState({ player: "chooser" })
  }

  render() {
    if (this.state.player === "guesser") {
      return (
        <GuesserContainer />
      )
    } else if (this.state.player === "chooser") {
      return (
        <ChooserContainer />
      )
    } else {
      //this is the inital display
      return (
        <div>
          <button onClick={this.selectGuesser.bind(this)}>Guesser</button>
          <button onClick={this.selectChooser.bind(this)}>Chooser</button>
        </div>
      )
    }
  }

}

export default GameContainer
