import {Box, Typography} from '@mui/material';
import FrontPage from '../components/FrontPage';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import NavBar from '../components/NavBar';

const Main = () => {
    return (
        <Box mb={0} mt={0}>
            <NavBar />
            <FrontPage />
            <WorkExperience />
            <Education />
        </Box>
    )
}

export default Main;