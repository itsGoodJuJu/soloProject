// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Question from "./Question";
// import qBank from "./answerSheet";
// import Score from "./Score";

// function Quiz() {
//   constructor(props) {
// 		super(props);
// 		this.state = {
// 			questionBank: qBank,
// 			currentQuestion: 0,
// 			selectedOption: "",
// 			score: 0,
// 			quizEnd: false,
// 		};
// 	}

// 	handleOptionChange = (e) => {
// 		this.setState({ selectedOption: e.target.value });
// 	};

// 	handleFormSubmit = (e) => {
// 		e.preventDefault();
// 		this.checkAnswer();
// 		this.handleNextQuestion();
// 	};

// 	checkAnswer = () => {
// 		const { questionBank, currentQuestion, selectedOption, score } = this.state;
// 		if (selectedOption === questionBank[currentQuestion].answer) {
// 			this.setState((prevState) => ({ score: prevState.score + 1 }));
// 		}
// 	};

// 	handleNextQuestion = () => {
// 		const { questionBank, currentQuestion } = this.state;
// 		if (currentQuestion + 1 < questionBank.length) {
// 			this.setState((prevState) => ({
// 				currentQuestion: prevState.currentQuestion + 1,
// 				selectedOption: "",
// 			}));
// 		} else {
// 			this.setState({
// 				quizEnd: true,
// 			});
// 		}
// 	};

// 	render() {
// 		const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
// 			this.state;
// 		return (
// 			<div className="App d-flex flex-column align-items-center justify-content-center">
// 				<h1 className="app-title">QUIZ APP</h1>
// 				{!quizEnd ? (
// 					<Question
// 						question={questionBank[currentQuestion]}
// 						selectedOption={selectedOption}
// 						onOptionChange={this.handleOptionChange}
// 						onSubmit={this.handleFormSubmit}
// 					/>
// 				) : (
// 					<Score
// 						score={score}
// 						onNextQuestion={this.handleNextQuestion}
// 						className="score"
// 					/>
// 				)}
// 			</div>
// 		);
// 	}
// }

// export default Quiz




// import React from 'react';
// // import Choices from './Choices';
// import Question from './Question';

// function Quiz() {
//   return (
//     <>
//       <h1>Quiz Questions</h1>
//       <ul>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//         <li>1</li>
//       </ul>
//       <Question />
//     </>
//   )
// }

// export default Quiz

// App.js

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./Question";
import qBank from "./answerSheet";
import Score from "./Score";

import './Quiz.css';

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionBank: qBank,
			currentQuestion: 0,
			selectedOption: "",
			score: 0,
			quizEnd: false,
		};
	}

	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.checkAnswer();
		this.handleNextQuestion();
	};

	checkAnswer = () => {
		const { questionBank, currentQuestion, selectedOption, score } = this.state;
		if (selectedOption === questionBank[currentQuestion].answer) {
			this.setState((prevState) => ({ score: prevState.score + 1 }));
		}
	};

	handleNextQuestion = () => {
		const { questionBank, currentQuestion } = this.state;
		if (currentQuestion + 1 < questionBank.length) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				selectedOption: "",
			}));
		} else {
			this.setState({
				quizEnd: true,
			});
		}
	};

  reloadQuiz = () => {
    window.location.reload();
  };

	render() {
		const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
			this.state;
		return (
			<div className="App d-flex flex-column align-items-center justify-content-center">
				<h2 className="app-title">A Handy-Dandy Quiz Game</h2>
				{!quizEnd ? (
					<Question
						question={questionBank[currentQuestion]}
						selectedOption={selectedOption}
						onOptionChange={this.handleOptionChange}
						onSubmit={this.handleFormSubmit}
					/>
				) : (
          <>
            <Score
              score={score}
              onNextQuestion={this.handleNextQuestion}
              className="score"
            />
            <button onClick={this.reloadQuiz} className="btn btn-info mt-2">
              Try Again
            </button>
          </>
				)}
			</div>
		);
	}
}

export default Quiz;
