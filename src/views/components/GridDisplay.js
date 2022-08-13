
// component
import { Item } from "./Item";
// styled
import "./styles/styledGridDisplay.scss";

export const GridDisplay = ({store}) => (
        <>
            <section className="grid">
                <div className="title">
                    <h4>{store.category}</h4>
                </div>
                <div className="container">
                    {
                        store.data.map(data => 
                            <Item 
                                key = {data.id}
                                id = {data.id}
                                src = {data.src}
                                name = {data.name}
                                price = {data.price}
                                
                            />
                        )
                    }
                </div>
            </section>
        </>
    )

