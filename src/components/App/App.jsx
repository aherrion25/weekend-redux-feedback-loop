import {useState, useEffect} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import Home from '../Home/Home.jsx'
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx';
import './App.css';

function App() {
  const [feedbackList, setFeedbackList] = useState([]);

  // on load fetch feedback data from server
  useEffect(() => {
    console.log('in useEffect');
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
    }).then((response) => {
      setFeedbackList(response.data);
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong!')
    });
  };

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path='/'>
            <Home  />
        </Route>
        <div>
          <Route exact path='/step/feeling'>
            <Feeling />
          </Route>
          <Route exact path='/step/understanding'>
            <Understanding />
          </Route>
          <Route exact path='/step/support'>
            <Support />
          </Route>
          <Route exact path='/step/comments'>
            <Comments />
          </Route>
          <Route exact path='/step/review'>
            <Review />
          </Route>

        </div>
      </Router>
      
    </div>
  );
}

export default App;
