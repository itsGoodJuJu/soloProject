// import React from 'react'

// export default function Question() {
//   return (
//     <div>Question</div>
//   )
// }

// Question.js

import React, {Component} from "react";
import Choices from "./Choices"
import './Quiz.css'

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="quizCard">
				<h2 className="questionNo"> Sign #{question.id}</h2>
				<br />
				<h5 className="pic mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Choices
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<br />
					<button type="submit" className="btn btn-warning mt-2">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;
