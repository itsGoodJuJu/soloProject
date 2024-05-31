import React, {Component} from "react";
import Choices from "./Choices"
import './Quiz.css'

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="quizCard">
				{/* tracks the question number you are currently on */}
				<h2 className="questionNo"> Sign #{question.id}</h2>
				<br />
				{/* renders the question from the question bank */}
				<h5 className="pic mt-2">{question.question}</h5>
				{/* renders the Choices component to supply the options and track your selected answers */}
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Choices
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<br />
					{/* submits the form */}
					<button type="submit" className="btn btn-warning mt-2">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;
