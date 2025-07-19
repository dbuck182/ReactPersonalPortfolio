import {Box, Typography} from "@mui/material"

const FrontPage = () => {
    return (
        <Box sx={{display: "flex", height: "100vh",alignItems: "center", justifyContent: "space-between", paddingTop: 4, paddingLeft: 2, paddingRight: 2, marginBottom: 0}}>
            <Typography variant="h1" sx={{color: "primary.contrastText"}}>Drew Buck</Typography>
            <Box
                component='img'
                src="/IMG_1332.jpg"
                alt="Profile"
                sx= {{
                    width: 400,
                    height: 400,
                    objectFit: 'cover',
                    boxShadow: 3,
                    border: '2px solid #1976d2',
                }}
            />
        </Box>
    )
}

export default FrontPage;