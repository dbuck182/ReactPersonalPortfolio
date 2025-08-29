import { Typography, Box, Grid, Card} from "@mui/material"


const Projects = () => {
    return (
        <Box id="Projects" width="80%">
            <Typography variant="h3" textAlign={'center'} sx={{color: "primary.contrastText"}}>Projects</Typography>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <Card variant="outlined" sx={{display: "flex", flexDirection: "column", alignItems: "center", p: 4}}>
                        <Typography variant="h5">Athlink</Typography>
                        <Typography>AthLink is a social media platform for connecting student athletes on the IOS app store.</Typography>
                        <Typography variant="subtitle1">Tech Stack | React Native, GoogleFirebase, TypeScript</Typography>
                        <Typography></Typography>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card variant="outlined" sx={{display: "flex", flexDirection: "column", alignItems: "center", p: 4}}>
                        <Typography variant="h5">Distributed File System</Typography>
                        <Typography variant="body1">Built a distributed file system in C++ as part of a final group project, handling file storage, replication, and retrieval.</Typography>
                        <Typography variant="subtitle1">Tech Stack | C++, gRPC, HTML, CSS</Typography>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card variant="outlined" sx={{display: "flex", flexDirection: "column", alignItems: "center", p: 4}}>
                        <Typography variant="h5">PGA Golf Dashboard</Typography>
                        <Typography variant="body1">Created a dashboard for PGA results allowing users to query for specific tournaments, years, and players.</Typography>
                        <Typography variant="subtitle1">Tech Stack | Node.js, Express.js, PostgreSQL, Javascript, HTML, CSS, MongoDB</Typography>
                        <Typography></Typography>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects;