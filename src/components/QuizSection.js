import React from 'react'
import { QUESTIONS } from '../constants/questions'

function Option(props) {
	const handleClick =()=>{
		const val = props.option===props.answer?null:props.option
		props.setAnswer(val)
	}
  	return (
		<div
			className={`
				mb-3 py-3 rounded-full shadow-sm flex flex-row bg-white hover:bg-green-500 justify-center 
				${props.option === props.answer ? 'bg-green-500 ': ' '}
			`}
			onClick={handleClick}>
			<div className=''>
				{props.option}
			</div>
		</div>
  	)
}

var answers = {}
function QuizSection(props) {
	const [answer, setAnswer] = React.useState(null)
	const [questions, setQuestions] = React.useState(QUESTIONS[props.section])
	const [qIndex, setQIndex] = React.useState(0)
	const [submited, setSubmited] = React.useState(false)

	React.useEffect(()=>{
		if(!props.attendedSections.includes(props.section)){
			answers = {}
			setQuestions(QUESTIONS[props.section])
			setSubmited(false)
			setQIndex(0)
		}else{
			setSubmited(true)
		}
	},[props.section])

	React.useEffect(()=>{
		if(answer && questions[qIndex-1]){
			answers[questions[qIndex-1]] = answer
			setAnswer(null)
		}
	},[qIndex])


	const clickHandler = () => {
		if(!answer){
			return
		}
		if(questions.length === qIndex+1 && !submited){
			setSubmited(true)
			props.setAttendedSections(prev=> [...prev,props.section])
			props.updateData(answers)
		}
		setQIndex(prev=>prev+1)
	}
  	return (
		<div className='text-center md:mx-56 mx-5'>
			{submited ?
			<div className='md:text-2xl text:xl font-bold pt-10'>
				Thank You 
			</div>
			:
			<div className=''>
				<h1 className='mb-10 text-lg font-semibold'>
					{questions[qIndex]}
				</h1>
				<div>
					<Option option="ALWAYS" answer={answer} setAnswer={setAnswer}/>
					<Option option="SOMETIMES" answer={answer} setAnswer={setAnswer}/>
					<Option option="NEVER" answer={answer} setAnswer={setAnswer}/>
				</div>
			</div>
			}
			{questions.length >= qIndex+1 && !submited &&
				<div 
					className={`
						bg-blue-200 rounded-full mt-8 py-4 shadow-md
						${answer ? " hover:bg-blue-500 bg-blue-400": ' '}
					`}
					onClick={clickHandler}
				>
					{questions.length > qIndex+1 ?
						"Next":"Submit"
					}
				</div>
			}
		</div>
  	)
}

export default QuizSection