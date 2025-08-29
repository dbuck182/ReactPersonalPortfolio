import { Typography, Box, Stack} from "@mui/material"
import EducationCard from "./EducationCard"

const Education = () => {

    let degrees = [{"School": "University of Pennsylvania", "img": "/UpennLogo.jpg", "degree": "Master's of Science and Engineering","major": "Computer and Information Science", "years": "September 2023 - May 2026"}, 
            {"School": "Haverford College", "img": "/Haverford_Logo.png", "degree": "Bachelors of Computer Science", "years": "September 2021 - May 2025"}
    ]

    return (
        <Box id="Education" sx={{bgcolor: "primary.main", paddingTop: 10, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", pb: 10}}>
            <Typography variant="h3" textAlign={'center'} sx={{color: "primary.contrastText"}}>Education</Typography>
            <Stack spacing={2} directtion="column" alignItems="center">
                {degrees.map((degree) => {
                    return (
                            <EducationCard education={degree}/>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default Education;