import {Box, Typography, Link} from "@mui/material"

const Links = () => {
    return (
        <Box sx={{display: "flex", flexDirection: "row"}}>
            <Typography p={2}><Link href="https://github.com/dbuck182" underline="hover" color="white">Github</Link></Typography>
            <Typography p={2}><Link href="https://www.linkedin.com/in/drewbuck182/" underline="hover" color="white">LinkedIn</Link></Typography>
        </Box>
    )
}

export default Links;