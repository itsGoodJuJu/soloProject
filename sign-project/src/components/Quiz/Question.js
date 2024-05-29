// import React from 'react'

// export default function Question() {
//   return (
//     <div>Question</div>
//   )
// }

// Question.js

import React, {Component} from "react";
import Choices from "./Choices"

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="">
				<h4> Sign #{question.id}</h4>
				<h5 className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Choices
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<button type="submit" className="btn btn-info mt-2">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;
