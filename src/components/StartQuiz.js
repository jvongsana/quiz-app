import React from 'react';


export default function StartQuiz(props) {

  const handleClick = () => {
    props.setShowQuiz(true);
    props.setStartTime();
  };

  return (
    <div>
      <button  onClick={handleClick}>
        Click here to begin your quiz!
      </button>
    </div>
  );
};