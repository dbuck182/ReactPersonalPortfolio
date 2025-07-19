import {Box, Typograph, Paper, Typography} from "@mui/material"
import React from "react";
const WorkExperience = () => {

    let experience = [{firm: "FTI Consulting",
                        title: "Software Developer Intern",
                        time: "May 2025 - August 2025",
                        bullets: ["Worked on Full-Stack applications using Laravel, React.Js and Angular",
                                "Atteneded client calls receiving feedback on work and iterated on that feedback"
                        ]}, {
                        firm: "AthLink",
                        title: "Lead App Developer / Co-Founder",
                        time: "July 2023 - February 2025",
                        bullets: ["Developed an IOS application helping student athletes connect for networking opportunties."]
                        },
                        {
                            firm: "Owl Cyber Defense",
                            title: "Engineering Intern",
                            time: "June 2023 - August 2024",
                            bullets: ["Performed E2E software testing with Playwright.",]
                        }]

    return (
        <Box sx={{bgcolor: "primary.main", marginTop: 0, p: 3}}>
            <Typography variant="h2" sx={{color: "primary.contrastText", textAlign: "center"}}>Past Experience</Typography>
            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between",  paddingTop: 4, paddingLeft: 2, paddingRight: 2, gap: 2}}>
                {experience.map((exper) => (
                    <Paper elevation={3} sx={{p: 5}}>
                        <Typography variant="h4">{exper.firm}</Typography>
                        <Typography>{exper.time}</Typography>
                        <ul>
                            {exper.bullets.map((bullet) => (
                            <li>{bullet}</li>
                        ))}
                        </ul>
                    </Paper>
            ))}
            </Box>
        </Box>
    )
}

export default WorkExperience;