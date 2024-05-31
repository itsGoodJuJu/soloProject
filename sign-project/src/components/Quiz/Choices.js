// import React, {Component} from 'react'

// export default function Choices() {
//     const { options, selectedOption, onOptionChange } = this.props;
//   return (
//     <>
//         <div className='options'>
//             {options.map((option, index) => (
//                 <div key={index} className="form-check">
//                     <input type="radio" name="choice" value= {10} selected={selectedOption === 10} onChange={onOptionChange} ></input>
//                     <label className='form-check-label'>{option}</label>
//                 </div> ))}
//         </div>
        
//     </>
//   )
// }


import React, { Component } from 'react';
import './Quiz.css';

class Choices extends Component {
	render() {
		const { options, selectedOption, onOptionChange } = this.props;

		return (
			<div className='choices'>
				{options.map((option, id) => (
					<div key={id} className="form-check">
						{/* sets the choices type to radio to select with a bubble */}
						<input
							type="radio"
							name="option"
							value={option}
							checked={selectedOption === option}
							onChange={onOptionChange}
							className="form-check-input"
						/>
						{/* shows the answer option */}
						<label className="form-check-label">{option}</label>
					</div>
				))}
			</div>
		);
	}
}

export default Choices;
