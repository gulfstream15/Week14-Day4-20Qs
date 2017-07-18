import React from 'react';

const QuestionForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Please ask your next question:</label>
      <input type="text" id="questionInputBox" placeholder="..." />
      <input type="submit" name="submit" value="Send question" />
    </form>
  );
};

export default QuestionForm;
