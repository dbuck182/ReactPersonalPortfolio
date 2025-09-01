import {Box, Typography} from '@mui/material';
import FrontPage from '../components/FrontPage';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Links from '../components/Links'

const Main = () => {
    return (
        <Box pb={10} mt={0} sx={{display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "primary.light",}}>
            <NavBar />
            <FrontPage />
            <WorkExperience />
            <Education />
            <Projects />
            <Links />
        </Box>
    )
}

export default Main;