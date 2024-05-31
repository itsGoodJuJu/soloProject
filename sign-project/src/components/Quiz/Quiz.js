import React, { Component } from "react";
import Question from "./Question";
import qBank from "./answerSheet";
import Score from "./Score";

import "bootstrap/dist/css/bootstrap.min.css";
import './Quiz.css';

class Quiz extends Component {
	constructor(props) {
		super(props);
		// creates a state to hold values to track questions in the quiz
		this.state = {
			questionBank: qBank,
			currentQuestion: 0,
			selectedOption: "",
			score: 0,
			quizEnd: false,
		};
	}
	handleOptionChange = (e) => {
		// updates the state selectedOption with the value of the selected answer
		this.setState({ selectedOption: e.target.value });
	};
	handleFormSubmit = (e) => {
		// when the answer is submitted, it checks the answer and moves on to the next question
		e.preventDefault();
		this.checkAnswer();
		this.handleNextQuestion();
	};

	checkAnswer = () => {
		// compares the selected answer to the answer in the question bank
		const { questionBank, currentQuestion, selectedOption, score } = this.state;
		if (selectedOption === questionBank[currentQuestion].answer) {
			// updates the score to your previous score + 1 if correct
			this.setState((prevState) => ({ score: prevState.score + 1 }));
		}
	};

	handleNextQuestion = () => {
		const { questionBank, currentQuestion } = this.state;
		// checks if the next question exists in the question bank
		if (currentQuestion + 1 < questionBank.length) {
			this.setState((prevState) => ({
				// sets the state of current questions to the current number + 1
				currentQuestion: prevState.currentQuestion + 1,
				// sets selected option back to empty
				selectedOption: "",
			}));
		} else {
			// if there are no more questions, end the quiz
			this.setState({
				quizEnd: true,
			});
		}
	};

  reloadQuiz = () => {
	// function to reload the page when called in order to restart the quiz
    window.location.reload();
  };

	render() {
		const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
			this.state;
		return (
			<>
				<h1 className="app-title">A Handy-Dandy Quiz Game</h1>
				<div className="App">
					{/* if the quiz has not ended, render the Question component */}
					{!quizEnd ? (
						<Question
							question={questionBank[currentQuestion]}
							selectedOption={selectedOption}
							onOptionChange={this.handleOptionChange}
							onSubmit={this.handleFormSubmit}
						/>
					) : (
						<>
						{/* if quiz has ended, render the Score component */}
							<Score
								score={score}
								onNextQuestion={this.handleNextQuestion}
								className="score"
							/>
							{/* button reloads the page with an onClick calling the reloadQuiz function */}
							<button onClick={this.reloadQuiz} className="btn btn-warning mt-2">
								Try Again
							</button>
						</>
					)}
				</div>
			</>
			
		);
	}
}

export default Quiz;
