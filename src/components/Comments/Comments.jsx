import ProgressBar from '../ProgressBar/ProgressBar';
import  TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Comments = () => {
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    const setComments = (event) => {
        // passes data to reducer
        dispatch({ type:'SET_COMMENTS', payload:event.target.value});
    };

    return(
        <>
         <ProgressBar step={4} />
         <h3>Comments or Compliments </h3>
         <div>
            <TextField id='comments' type='text' style={{width:'45%'}}  multiline maxRows={4} value={comments} onChange={setComments} />
            <Button variant='contained' style={{margin: '1em '}}>Next</Button>

         </div>

        
        
        
        </>
    )

}

export default Comments;