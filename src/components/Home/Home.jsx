import  Button  from "@mui/material/Button";
import { useHistory }  from "react-router-dom";


const Home = () => {
    const history = useHistory()

    return(
        <>
            <div>
                <p>
                    We want your feedback let us know how you are feeling and if there is anything we can do to help you better
                    understand the material. We want you to feel supported and to succeed. When ready, hit start and we can get this party
                    going.
                </p>
                <Button variant='contained' className='button' onClick={() => history.push('/step/feeling')} >Start</Button>
            </div>
        
        
        </>
    )
}

export default Home;