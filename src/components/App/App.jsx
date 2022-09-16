import {useState, useEffect} from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import Feeling from '../Feeling/Feeling.jsx';
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
        <div>
          <Route exact path='/step/feeling'>
            <Feeling />
          </Route>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
