import ProgressBar from '../ProgressBar/ProgressBar';
import  TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Feeling = () => {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    const setFeeling = (event) => {
        // passes data to reducer
        dispatch({ type:'SET_FEELING', payload:event.target.value});
    };


    return(
        <>
            <ProgressBar step={1} />
            <h3>How do you feel</h3>
            <div>
                <TextField size='small' value={feeling}  onChange={setFeeling} required id="feeling" className='input' 
                type='number' InputProps={{inputProps: {min: 0, max: 5}}} />
                <Button onClick={() => history.push('/step/understanding')} variant='outlined' className='button'>Next</Button>
            </div>
        </>
    )
}

export default Feeling;