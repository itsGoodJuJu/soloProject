import React, { Component } from 'react';
import './Quiz.css'

class Score extends Component {
	render() {
		const { score, updatedQuestion } = this.props;

		return (
			<div className='resultBox'>
				<h2>Results</h2>
				<h4>Your score: {score}</h4>
			</div>
		);
	}
}

export default Score;
