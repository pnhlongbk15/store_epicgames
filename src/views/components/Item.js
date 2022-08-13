// style
import "./styles/styledItem.scss"

export const Item = (data)=> (
    <div className="item">
        <div className="img" data-id= {data.id}>
            <div className="curtain">
                <i class="fa-solid fa-plus"></i>
                <h4>Add to Wishlist</h4>
            </div>
            <img src= {data.src} alt="" />
        </div>
        <div className="info">
            <h4 className="name"> {data.name} </h4>
            <h4 className="price"> 
                { typeof(data.price) === "object" ? 
                    <>
                        <h4 className="discount">{data.price.discount}</h4>
                        <div>
                            <h4 className="before">{data.price.before}</h4>
                            <h4 className="after">{data.price.after}</h4>
                        </div>
                    </>
                    : data.price
                }
            </h4>
        </div>
    </div>
)