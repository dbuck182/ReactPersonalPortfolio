import { Typography, Box, Stack} from "@mui/material"
import EducationCard from "./EducationCard"

const Education = () => {

    let degrees = [{"School": "University of Pennsylvania", "img": "", "degree": "Master's of Science and Engineering","major": "Computer and Information Science", "years": "September 2023 - May 2026"}, 
            {"School": "Haverford College", "img": "", "degree": "Bachelors of Computer Science", "years": "September 2021 - May 2025"}
    ]

    return (
        <Box id="Education" sx={{bgcolor: "primary.main", height: "100vh", paddingTop: 10, display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography variant="h3" textAlign={'center'} sx={{color: "primary.contrastText",}}>Education</Typography>
            <Stack spacing={2}>
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