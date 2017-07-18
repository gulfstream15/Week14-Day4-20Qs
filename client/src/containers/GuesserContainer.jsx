import React from 'react'
import QuestionForm from '../components/QuestionForm';
import RoundList from '../components/RoundList';

//On creation, GuesserContainer has the props: player, questions, answers and onSubmit.
class GuesserContainer extends React.Component {

  render() {
    return (
      <div>
        <h1>Please ask a question...</h1>
        <QuestionForm
          onSubmit={this.props.onSubmit}
        />
        <RoundList answers={this.props.answers} questions={this.props.questions}></RoundList>
      </div>
    )
  }

}

export default GuesserContainer
