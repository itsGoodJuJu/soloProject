import './App.css';
import Home from './components/Home/Home';
import Generate from './components/Spelling/GenerateWord';
import Flashcard from './components/Practice/FlashcardStudy';
import Quiz from './components/Quiz/Quiz';
import NavBar from './components/Home/NavBar';
import Donate from './components/Donate/Donate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <>
      <div className='body'>
        <NavBar />
        <Router>
          <div>
            <Switch>
              <Route path ="/home">
                <Home />
              </Route>
              <Route path ="/spell">
                <Generate />
              </Route>
              <Route path ="/study">
                <Flashcard />
              </Route>
              <Route path ="/quiz">
                <Quiz />
              </Route>
              <Route path ="/donate">
                <Donate />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
