
export const SliderScreen = ({item}) => (
        <>
                <div className="wrap " key={item.id}>
                    <div className="picture">
                        <picture>
                            <source media="(min-width:1028px)" srcSet={item.srcSet} />
                            <img src={item.src} alt="" />
                        </picture>
                    </div>
                    <div className="box">
                        <div className="description">
                            <h4>last chance to pre-purchase</h4>
                            <h4>Unlock early game content, including three-suit pack, early access to the Spider-Drone Gadget, and Five Skill Points.</h4>
                        </div>
                        <div className="btns">
                            <h4>Starting at {item.price}</h4>
                            <div className="btns">
                                <button>pre-purchase now</button>
                                <button> <i class="fa-solid fa-plus"></i>add to wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>   
        </>
)