import ProgressBar from '../ProgressBar/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const Review = () => {
    const history = useHistory();
    //getter
    const feeling = useSelector(store => store.feeling);
    //getter
    const understanding = useSelector(store => store.understanding);
    //getter
    const support = useSelector(store => store.support);
    //getter
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const feedbackReview = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling,
                understanding,
                support,
                comments
            }
        }).then((response) => {
            dispatch({ type: 'CLEAR_ALL '});
            // goes back to home page
            history.push('/');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!')
        })
    }


    return(
        <>
            <ProgressBar step={5} />
            <h3>Review Page</h3>
            <div>
                <div style={{margin: '20px 24px'}}>
                    <div>Feeling: {feeling}</div>
                    <div>Understanding: {understanding}</div>
                    <div>Support: {support}</div>
                    <div>Comments: {comments}</div>
                </div>
                <Button variant="contained" type="submit" className="button" onClick={feedbackReview}>Submit</Button>
            </div>
        
        
        </>
    )

}

export default Review;