const arrayShuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr;
};

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

const sortAPIQuestions = (questions) => {
  let formattedQuestions = []
  for (const question of questions) {
    const answerOptions = arrayShuffle([...question.incorrect_answers.map((option) => 
      {
        return { answer: decodeHtml(option), 
                 isCorrect: false}
      }), 
      { answer: decodeHtml(question.correct_answer), 
        isCorrect: true
      }
    ])

    formattedQuestions.push({
      question: decodeHtml(question.question),
      answerOptions 
    });
  }
  return formattedQuestions;
};

export { sortAPIQuestions };