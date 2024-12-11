import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from './landing/page';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const theme = createTheme();

export default function Home() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </LocalizationProvider >
  )
}
