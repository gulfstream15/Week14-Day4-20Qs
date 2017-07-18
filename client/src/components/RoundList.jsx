import React from 'react';

//On creation, props are answers and questions
class RoundList extends React.Component {

  render() {
    let rounds = [];
    let questions = this.props.questions;
    let answers = this.props.answers;

    questions.forEach(function(question, index){
      rounds.push(question);
      rounds.push(answers[index]);
    });

    console.log();

    const displayRounds = rounds.map((item, index) => {
      return <p key={index}>{item}</p>
    });

    return (
      <div>
        {displayRounds}
      </div>
    );
  }

}

export default RoundList;
