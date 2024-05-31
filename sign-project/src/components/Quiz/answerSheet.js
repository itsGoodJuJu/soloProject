import Dog from '../../images/dog.gif';
import Answer from '../../images/answer.gif';
import Meet from '../../images/meet-you.gif';
import Vacation from '../../images/vacation.webp';
import Who from '../../images/who.gif';

const qBank = [
	{
		id: 1,
		question: <img src={Dog} alt="finger-snapping" width = "400px" /> ,
		options: ["Dog", "Snap", "Quick", "Music"],
		answer: "Dog",
	},
	{
		id: 2,
		question: <img src={Answer} alt="finger-snapping" width = "400px" /> ,
		options: ["Go", "Answer", "Point", "Noodle"],
		answer: "Answer",
	},
	{
		id: 3,
		question: <img src={Meet} alt="finger-snapping" width = "400px" /> ,
		options: ["Close", "Fight", "Support", "Meet"],
		answer: "Meet"
	},
	{
		id: 4,
		question: <img src={Vacation} alt="finger-snapping" width = "400px" /> ,
		options: ["Feathers", "Vacation", "Jacket", "Scary"],
		answer: "Vacation"
	},
	{
		id: 5,
		question: <img src={Who} alt="finger-snapping" width = "400px" /> ,
		options: ["How", "Cool", "Blow", "Who"],
		answer: "Who"
	},
]

export default qBank;
