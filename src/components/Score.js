export default function Score(props) {
  let assessment = false;

  if (props.score > 3) {
    assessment = true;
  }

  const delta = Math.abs(props.endTime - props.startTime) / 1000;
  const minutes = Math.floor(delta / 60) % 60;
  const seconds = Math.round(delta % 60);
  let timeElapsed = '';

  if (minutes > 0) {
    timeElapsed = `${minutes} minutes and ${seconds} seconds`
  } else {
    timeElapsed = `${seconds} seconds`
  }
  
  return (
    <div className='score-section'>
      {assessment ? ('PASSED') : ('FAILED')}
      <br/>
      You scored {props.score} out of {props.questions.length}
      <br/>
      in {timeElapsed}
    </div>
  )
}