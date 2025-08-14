import { Typography, Box } from "@mui/material"

const Education = () => {

    let degrees = [{"School": "University of Pennsylvania", "img": "", "degree": "Master's of Science and Engineering","major": "Computer and Information Science", "years": "September 2023 - May 2026"}, 
            {"School": "Haverford College", "img": "", "degree": "", "years": ""}
    ]

    return (
        <Box id="Education" sx={{bgcolor: "primary.main", height: "100vh", paddingTop: 10}}>
            <Typography variant="h3" textAlign={'center'} sx={{color: "primary.contrastText",}}>Education</Typography>
            <Box>
                {degrees.map((degree) => {
                    return (
                        <Box>
                         <Typography>{degree.School}</Typography>
                        <Typography>{degree.degree}</Typography>
                        </Box>
                    )
                    
                })}
            </Box>
        </Box>
    )
}

export default Education;