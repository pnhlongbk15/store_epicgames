import "./styles/styledButtonScreen.scss";


export const ButtonScreen = ({screen,event}) => {

    return (   
    <>
        <button className="btn" onClick={event} key={screen.id} data-id={screen.id}>
            <div className="img">
                <img src={screen.mini} alt="" />
            </div>
            <h4 className="name">{screen.name}</h4>
        </button>
    </>
    )
}
