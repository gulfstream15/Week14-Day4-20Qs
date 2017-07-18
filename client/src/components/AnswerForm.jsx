import React from 'react';

const AnswerForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Please enter your answer:</label>
      <input type="text" id="answerInputBox" placeholder="..." />
      <input type="submit" name="submit" value="Send answer" />
    </form>
  );
};

export default AnswerForm;
