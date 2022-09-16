import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const ProgressBar = ({step}) => {
    const steps= [
        'Rate Feeling',
        'Rate Understanding',
        'Rate Support',
        'Enter Comments'
    ];
    return(
        <>
            <Box sx={{width: '100%'}}>
                <Stepper activeStep={step - 1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </>
    );
    

}

export default ProgressBar;