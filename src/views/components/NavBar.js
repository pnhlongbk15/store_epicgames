import { Link } from "react-router-dom";


// style
import "./styles/styledNavBar.scss";


export const NavBar = () => (
    <nav className="navbar">
        <ul className="start">
            <Link to=""> 
                <img src="./img/epic-games-2.svg" alt="" />
            </Link>

            <li className="active">
                <Link to="/" >
                    <p>store</p>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <p>faq</p>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <p>help</p>
                </Link>
            </li>
            <li>
                <Link to="#">
                    <p>unreal engine</p>
                </Link>
            </li>
        </ul>
        <ul className="end">
            <li className="lang">
                <Link to="#">
                    <i class="fa-solid fa-globe"></i>
                </Link>
            </li>
            <li className="signin">
                <Link to="#">
                    <i class="fa-solid fa-user"></i>
                    <p>sign in</p>
                </Link>
            </li>
            <li className="btn-down">
                <Link to="#">
                    <p>download</p>
                </Link>
            </li>
        </ul>
    </nav>

)
