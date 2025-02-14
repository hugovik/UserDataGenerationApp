
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DataGenerator from "./components/dataGenerator";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div>
      {/* <h1>Data Generator</h1> */}
      <DataGenerator />
    </div>
    </ThemeProvider>
  );
}

export default App;
