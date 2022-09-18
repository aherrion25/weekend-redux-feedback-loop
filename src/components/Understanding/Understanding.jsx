import ProgressBar from '../ProgressBar/ProgressBar';
import  TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Understanding = () => {
    const history = useHistory();
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    const setUnderstanding = (event) => {
        // passes data to reducer
        dispatch({ type:'SET_UNDERSTANDING', payload:event.target.value});
    };


    return(
        <>
            <ProgressBar step={2} />
            <h3>How well do you understand the material</h3>
            <div>
                <TextField size='small' value={understanding}  onChange={setUnderstanding} required id="understanding" className='input' 
                type='number' InputProps={{inputProps: {min: 0, max: 5}}} />
                <Button onClick={() => history.push('/step/support')} variant='outlined' className='button'>Next</Button>
            </div>
        </>
    )
}

export default Understanding;