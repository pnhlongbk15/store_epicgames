import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
// component
import { FreeGames } from "./pages/FreeGames/FreeGames.js"
import { Home } from "./pages/Home/Home.js";
const Main = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/freeGames" element={<FreeGames />} />
                </Routes>
            </Router>
        </>
    )
}
export default Main;