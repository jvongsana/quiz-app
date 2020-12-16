import React from 'react';


export default function StartQuiz(props) {

  const handleOpen = () => {
    props.setShowQuiz(true);
    props.setStartTime();
  };

  return (
    <div>
      <button  onClick={handleOpen}>
        Click here to begin your quiz!
      </button>
    </div>
  );
};