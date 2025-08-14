import {Box, Typograph, Paper, Typography} from "@mui/material"
import React from "react";
const WorkExperience = () => {

    let experience = [{firm: "FTI Consulting",
                        title: "Software Developer Intern",
                        time: "May 2025 - August 2025",
                        skills: ["React.js", "Laravel", "Angular", "PHP", "TypeScript"],
                        bullets: ["Designed and implemented Laravel Eloquent migrations to restructure MySQL schemas, enabling client requested features.",
                                "Wrote end-to-end and unit tests using Playwright, Jest, and Vitest, improving coverage and ensuring product quality.",
                                "Rebuilt React.js admin interface in Laravel Filament.",
                                "Refactored backend Laravel API to match new database schema and business logic."

                        ]}, {
                        firm: "AthLink",
                        title: "Lead App Developer / Co-Founder",
                        time: "July 2023 - February 2025",
                        skills: ["React Native", "Google Firebase", "TypeScript"],
                        bullets: ["AthLink is a social media app that connects current and former collegiate student-athletes.",
                            "Launched to the IOS store on April 29th 2024 and gained over 100 users in the first week.",
                            "Designed and implemented posting logic using React Native with TypeScript for the front end and Google Firebase for the backend and database, allowing users to post on the app with text and images.",
                            "Developed a messaging service implementing react-native-gifted-chat for the UI and Google Firebase to store message data, allowing users to message each other through the app",
                            "Leveraged Google Firebase Firestore to create and store a NoSQL database with user data."
                        ]
                        },
                        {
                            firm: "Owl Cyber Defense",
                            title: "Engineering Intern",
                            time: "June 2023 - August 2024",
                            bullets: ["Developed automated test scripts using Python and Selenium in order to test product functionality, resulting in improved test coverage and decreased test times.",
                                "Participated in regression testing using socat and iPerf, passing over 10 test cases ensuring the product was ready for an official release",
                                "Led performance testing, designing a Bash script to automate iPerf for capturing precise latency and throughput data, and efficiently organizing it into a well-formatted CSV file to show to company clients.",
                                "Participated in bi-weekly scrum ceremonies, where I learned Agile methodologies and Jira services."
                            ]
                        }]

    return (
        <Box id="Experience" sx={{bgcolor: "primary.main", marginTop: 0, p: 3, height: "100vh", marginBottom: 3, paddingBottom: 20}}>
            <Typography variant="h2" sx={{color: "primary.contrastText", textAlign: "center"}}>Past Experience</Typography>
            <Box sx={{display: "grid", justifyContent: "space-between",  paddingTop: 4, paddingLeft: 2, paddingRight: 2, gap: 2}}>
                {experience.map((exper) => (
                    <Paper elevation={3} sx={{p: 5}}>
                        <Typography variant="h4">{exper.firm}</Typography>
                        <Typography>{exper.title}</Typography>
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