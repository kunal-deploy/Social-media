import { BrowserRouter , Routes , Router , Route , Navigate } from "react-router-dom";
import HomePage from "scenes/homePage"; // Without jsconfig.json this would have been from "./scenes/homepage"
import Navbar from "scenes/navbar";
import ProfilePage from "scenes/profilePage";
import LoginPage from "scenes/loginPage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import state from "state";

function App() {
  const mode = useSelector( (state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)) , [mode]);

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path = "/" element = {<LoginPage/>}/>
          <Route path = "/home" element = {<HomePage/>}/>
          <Route path = "/profile/:userId" element = {<ProfilePage/>}/>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
