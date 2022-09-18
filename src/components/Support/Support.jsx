import ProgressBar from '../ProgressBar/ProgressBar';
import  TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Support = () => {
    const history = useHistory();
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    const setSupport = (event) => {
        // passes data to reducer
        dispatch({ type:'SET_SUPPORT', payload:event.target.value});
    };


    return(
        <>
            <ProgressBar step={3} />
            <h3>How do you feel</h3>
            <div>
                <TextField size='small' value={support}  onChange={setSupport} required id="support" className='input' 
                type='number' InputProps={{inputProps: {min: 0, max: 5}}} />
                <Button onClick={() => history.push('/step/comment')} variant='outlined' className='button'>Next</Button>
            </div>
        </>
    )
}

export default Support;