import { useEffect } from "react";


// component
import { Item } from "./Item"
// styled
import "./styles/styledHorizDisplay.scss"

export const HorizDisplay = ({store}) => {
    
    useEffect(()=>{
        const field = document.querySelector(`[data-field="${store.category}"]`)
        const container = field.querySelector(".container");
        const arrowLeft = field.querySelector(".arrow-left");
        const arrowRight = field.querySelector(".arrow-right");

        let containerWidth = container.getBoundingClientRect().width;
        let n = store.data.length <= 4 ? store.data.length : 5;
        let width = (containerWidth - (n-1)*20)/n;
        container.style.gridAutoColumns = `${width}px`;

        arrowLeft?.addEventListener("click",()=>{
            arrowRight.classList.remove("active")
            container.scrollLeft -= (containerWidth + 20); // phan tu cuoi cung du 1 gap

            arrowLeft.classList.add("active")
            arrowRight.classList.add("direction")

            if(container.scrollLeft <= containerWidth + 20) {
                arrowLeft.classList.remove("active")
                arrowLeft.classList.remove("direction")
            }
        })
        
        arrowRight?.addEventListener("click",()=>{
            arrowLeft.classList.remove("active")
            container.scrollLeft += (containerWidth + 20);

            arrowRight.classList.add("active")
            arrowLeft.classList.add("direction")

            if(container.scrollLeft + 2*(containerWidth + 20) >= container.scrollWidth) {
                arrowRight.classList.remove("active")
                arrowRight.classList.remove("direction")
            }
        })

        
    },[])
    

    return (
        <>              
            <section className="horiz-display" data-field ={store.category}>
                { store.data.length <= 4 ? <></> : 
                    <div className="btns">
                        <button className="btn arrow-left">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="btn arrow-right direction">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div> 
                }
                <div className="title">
                    <h4>{store.category}</h4>
                </div>
                <div className="container">
                
                    {   
                        store.data.map(data =>
                            <Item 
                                key={data.id}
                                id={data.id}
                                src={data.src}
                                name={data.name}
                                price={data.price}
                            />
                        )
                    }
                </div>
            </section>
        </>
    )
}

