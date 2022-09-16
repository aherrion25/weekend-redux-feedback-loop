import ProgressBar from '../ProgressBar/ProgressBar';
import  TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import InputProps  from '@mui/material/';


const Feeling = () => {


    return(
        <>
            <ProgressBar step={1} />
            <h3>How do you feel</h3>
            <div>
                <TextField size='small' required id="feeling" className='input' 
                type='number' InputProps={{inputProps: {min: 1, max: 5}}} />
                <Button variant='outlined' className='button'>Next</Button>
            </div>
        </>
    )
}

export default Feeling;