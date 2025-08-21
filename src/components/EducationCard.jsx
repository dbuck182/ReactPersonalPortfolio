import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function EducationCard(props) {
  return (
    <Card sx={{ maxWidth: 500, margin: "0 auto"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.education.School}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{props.education.degree} ({props.education.years})</Typography>
        <Typography variant="body2">
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}