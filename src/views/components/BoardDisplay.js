import "./styles/styledBoardDisplay.scss";
import { StyledItemBoard } from "./styles/StyledBoardDisplay";

export const BoardDisplay = ({store}) => (
    <>
        <div className="board-display">
            {store.map(item => (
                <StyledItemBoard type={item.id}> {/*use key as attribute is not invalided */}
                    {console.log(item.id)}
                    {console.log((item.id === 1))}
                    <div className="img">
                        <img src={item.src} alt="" />
                        <h4 className="status">{item.status}</h4>
                    </div>
                    <div className="info">
                        <h4>{item.name}</h4>
                        <h6>{item.publish}</h6> 
                    </div>
                </StyledItemBoard>
            ))}
        </div>                             
    </>
)
// 