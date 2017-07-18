import React from 'react'
import GuesserContainer from './GuesserContainer'
import ChooserContainer from './ChooserContainer'
import io from 'socket.io-client';


class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      player: null,
      questions: [],
      answers: []
    }

    this.socket = io();
    this.socket.on("question", this.questionReceived.bind(this));
    this.socket.on("answer", this.answerReceived.bind(this));
  }

  questionReceived(question){
    console.log("question received: ", question);

    const oldQuestions = this.state.questions;
    let newQuestions = [question, ...oldQuestions];
    this.setState({
      questions: newQuestions
    });
  }

  answerReceived(answer){
    console.log("answer received: ", answer);

    const oldAnswers = this.state.answers;
    let newAnswers = [answer, ...oldAnswers];
    this.setState({
      answers: newAnswers
    });
  }

  addQuestionFromForm(event){
    event.preventDefault()

    const question = event.target.questionInputBox.value;
    console.log("about to emit the question: ", question);
    this.socket.emit("question", question);
  }

  addAnswerFromForm(event){
    event.preventDefault()

    const answer = event.target.answerInputBox.value;
    console.log("about to emit the answer: ", answer);
    this.socket.emit("answer", answer);
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
        <GuesserContainer
          player={this.state.player}
          questions={this.state.questions}
          answers={this.state.answers}
          onSubmit={this.addQuestionFromForm.bind(this)}
        />
      )
    } else if (this.state.player === "chooser") {
      return (
        <ChooserContainer
          player={this.state.player}
          questions={this.state.questions}
          answers={this.state.answers}
          onSubmit={this.addAnswerFromForm.bind(this)}
        />
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
  }//render

}

export default GameContainer
