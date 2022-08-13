import { useEffect, useState } from "react";
import { SliderScreen } from "./SliderScreen";
import { ButtonScreen } from "./ButtonScreen";

// style
import "./styles/styledScreen.scss";

// data
import { screen } from "../../data/screen/storage.js";

export const Screen = () => {
    const [index,setIndex] = useState(0);
    console.log(index)
    const [preIndex,setPreIndex] = useState(index);
    
    const  getIndex = (e) => {
        // console.log(index)
        setPreIndex(index);
        if (e.currentTarget.dataset.id > 0){
            setIndex(e.currentTarget.dataset.id - 1)
        } else {
            setIndex(e.currentTarget.dataset.id)
        }
    }
    useEffect(()=>{
        const btn = [...document.querySelectorAll(".btns-wrap .btn")]
        setTimeout(()=>{
            if( index <= 3) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        },8000)
        btn[index].click()
    },[index])

    useEffect(()=>{
        const btn = [...document.querySelectorAll(".screen > .btns-wrap .btn")];
        btn[preIndex].classList.remove("active");
        btn[index].classList.add("active")

    },[index])

    useEffect(()=>{
        const slider = document.querySelector(".screen > .wrap");
        slider.classList.add("active")
    },[index])

    return (
        <>
            <section className="screen">
                <SliderScreen item={screen[index]} key={screen[index].id}/>
                <div className="btns-wrap">
                    {screen.map(item => (
                        <ButtonScreen screen={item} event={getIndex} />
                    ))}
                </div>
            </section>
        </>
    )
}
    
