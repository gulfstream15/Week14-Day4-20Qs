import React from 'react';
import AnswerForm from '../components/AnswerForm';
import RoundList from '../components/RoundList';

class ChooserContainer extends React.Component {

  render() {

    const questions = this.props.questions.map((question, index) => {
      return <p key={index}>{question}</p>
    });

    return (
      <div>
        <AnswerForm
          onSubmit={this.props.onSubmit}
        />
        <RoundList answers={this.props.answers} questions={this.props.questions}></RoundList>
      </div>
    );
  }

}

export default ChooserContainer
