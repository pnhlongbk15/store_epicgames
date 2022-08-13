import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// style
import "./styles/styledSearchBar.scss"

export const SearchBar = () => {
    // useEffect(()=>{
    //     const navbar = document.querySelector("nav.navbar")
    //     const searchBar = document.querySelector(".searchBar")

    //     const navHeight = navbar.getBoundingClientRect().height;    
    //     window.addEventListener("scroll",()=>{
    //         const scrollHeight = window.pageYOffset;

    //         if (scrollHeight > navHeight) {
    //             searchBar.classList.add('active')
    //         } else {
    //             searchBar.classList.remove('active')
    //         }


    //     })
    //     return ()=>{
    //         window.addEventListener("scroll",()=>{return false;})
    //     }
    // },[])
    const [index,setIndex] = useState(0);
    const [pre,setPre] = useState(index)
    
    const check = (e) => {
        const nextIndex = e.currentTarget.dataset.id;
        setIndex(nextIndex === 0 ? 0 : nextIndex-1)// giá trị này được truyền ra ngoài hàm
    }
    useEffect(()=>{
        const searchBar = document.querySelector(".searchBar");
        const btns = [...searchBar.querySelectorAll(".nav > li")];
        btns.forEach((btn)=>{
            btn.addEventListener("click",check)
        })
    },[])
    useEffect(()=>{
        const searchBar = document.querySelector(".searchBar");
        const btns = [...searchBar.querySelectorAll(".nav > li")];
        btns[pre]?.classList.remove("active")
        btns[index]?.classList.add("active")
        setPre(index)
    },[index])
    

    return (
        <div className="searchBar">
            <div className="search">
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" className="input" placeholder="Search store"/>
            </div>
            <ul className="nav">
                <li data-id="1">
                    <Link to="#">
                        <p>discover</p>
                    </Link>
                </li>
                <li data-id="2">
                    <Link to="/freeGames">
                        <p>browse</p>
                    </Link>
                </li>
                <li data-id="3">
                    <Link to="#">
                        <p>news</p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

    

