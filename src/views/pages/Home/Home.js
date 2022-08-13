// style
import "./style/styledHome.scss"
// component
import { NavBar } from "../../components/NavBar.js";
import { SearchBar } from "../../components/SearchBar.js";
import { Screen } from "../../components/Screen";
import { HorizDisplay } from "../../components/HorizDisplay.js";
import { Footer } from "../../components/Footer.js";
import { BoardDisplay} from "../../components/BoardDisplay.js";

// data
import { storeAchie } from "../../../data/achievements/storage.js";
import { storeSale } from "../../../data/onSales/storage.js";
import { FooterBody } from "../../components/FooterBody";
import { storeBoard } from "../../../data/boardDisplay/storage";
export const Home = () => (
    <>
        <NavBar id="top" />
        <div className="middle">
            <SearchBar />
            <div className="wrap">
                <Screen />
                <HorizDisplay store={storeSale} />
                <div className="bg">
                    <div>
                        <h4>Free Games</h4>
                        <button>view more</button>
                    </div>
                    <BoardDisplay store={storeBoard} />
                </div>
                <HorizDisplay store={storeAchie} />

                <FooterBody />
            </div>
            
        </div>
        <Footer />
    </>
)

