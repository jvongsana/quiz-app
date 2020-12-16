import React from 'react';


export default function StartQuiz(props) {

  const handleOpen = () => {
    props.setShowQuiz(true);
  };

  return (
    <div>
      <button  onClick={handleOpen}>
        Start Quiz!
      </button>
    </div>
  );
};