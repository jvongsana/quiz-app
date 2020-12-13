export default function Score(props) {
  return (
    <div className='score-section'>
      You scored {props.score} out of {props.questions.length}
    </div>
  )
}