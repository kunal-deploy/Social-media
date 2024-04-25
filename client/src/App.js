import { BrowserRouter , Routes , Router , Navigate } from "react-router-dom";
import homePage from "scenes/homePage"; // Without jsconfig.json this would have been from "./scenes/homepage"
import navbar from "scenes/navbar";
import profilePage from "scenes/profilePage";
import loginPage from "scenes/loginPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<loginPage/>}/>
          <Route path = "/home" element = {<homePage/>}/>
          <Route path = "/profile/:userId" element = {<profilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
