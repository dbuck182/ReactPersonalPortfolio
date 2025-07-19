import {Box, Typography} from '@mui/material';
import FrontPage from '../components/FrontPage';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';

const Main = () => {
    return (
        <Box mb={0} mt={0}>
            <FrontPage />
            <WorkExperience />
            <Education />
        </Box>
    )
}

export default Main;