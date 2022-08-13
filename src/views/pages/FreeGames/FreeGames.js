
// data
import { storeFree } from "../../../data/free/storage.js";
import { storeDemo } from "../../../data/demo/storage.js";
import { storeMoreFree } from "../../../data/free/storage.js";
import { storeBoard } from "../../../data/boardDisplay/storage.js";
// component
import { NavBar } from "../../components/NavBar.js";
import { SearchBar } from "../../components/SearchBar.js";
import { BoardDisplay } from "../../components/BoardDisplay.js";
import  { GridDisplay }  from "../../components/GridDisplay.js";
import  { HorizDisplay }    from '../../components/HorizDisplay.js';
import { Footer } from "../../components/Footer.js";

// style
import "./style/styledFreeGames.scss"

export const FreeGames = ()=> {
    return (
        <>
            <NavBar id="top" />
            <div className="middle">
                <SearchBar />
                <div className="wrap">
                    <section className="header">
                        <div className="title">
                            <h4>play more</h4>
                            <h1>free games</h1>
                            <h6>
                                Epic Games Store gives you a free game every week. 
                                Come back often for the exclusive offers. 
                                Download a free game to play or join a free-to-play game community today.
                            </h6>
                        </div>  
                    </section>
                    <BoardDisplay store={storeBoard}/>
                    <GridDisplay store={storeFree}/>

                    <HorizDisplay store={storeDemo}/>
                    <HorizDisplay store={storeMoreFree} />
                </div>
            </div>
            <Footer />
        </>
    )
};

