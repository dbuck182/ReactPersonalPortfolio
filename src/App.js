import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import {Container, Box} from "@mui/material";


function App() {
  return (
    <Box sx={{ bgcolor: "primary.light", height: "100vh"}}>
      <Main />
    </Box>
  );
}

export default App;
