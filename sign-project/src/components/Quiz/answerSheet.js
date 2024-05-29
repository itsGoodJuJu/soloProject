import Dog from '../../images/dog.gif';
import Answer from '../../images/answer.gif';
import Meet from '../../images/meet-you.gif';
import Vacation from '../../images/vacation.webp';
import Who from '../../images/who.gif';

const qBank = [
	{
		id: 1,
		question: <img src={Dog} alt="finger-snapping" height="20%" width = "150px" /> ,
		options: ["dog", "snap", "quick", "music"],
		answer: "dog",
	},
	{
		id: 2,
		question: <img src={Answer} alt="finger-snapping" height="20%" width = "150px" /> ,
		options: ["go", "answer", "point", "noodle"],
		answer: "answer",
	},
	{
		id: 3,
		question: <img src={Meet} alt="finger-snapping" height="20%" width = "150px" /> ,
		options: ["close", "fight", "support", "meet"],
		answer: "meet"
	},
	{
		id: 4,
		question: <img src={Vacation} alt="finger-snapping" height="20%" width = "150px" /> ,
		options: ["feathers", "vacation", "jacket", "scary"],
		answer: "vacation"
	},
	{
		id: 5,
		question: <img src={Who} alt="finger-snapping" height="20%" width = "150px" /> ,
		options: ["how", "cool", "blow", "who"],
		answer: "who"
	},
]

export default qBank;
