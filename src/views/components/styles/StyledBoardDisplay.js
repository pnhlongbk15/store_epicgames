import styled from "styled-components";

export const StyledItemBoard = styled.div`
        display: flex;
        flex-direction: column;
        cursor: pointer;
        .img {
            overflow: hidden;
            border-radius: 5px;
            position: relative;
            &:hover::after {
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background-color: rgba(255,255,255,0.2);
                    top: 0;
                    left: 0;
                    z-index: 1;
                }
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;                
            }
        
            h4 {
                text-align: center ;
                width: 100%;
                background-color: ${ props => ( props.type === 0 ? 'black' : '#0078F2' )};
                text-transform: uppercase;
                font-size: 0.8em;
                padding: 5px 0;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 99;
            }
            
        }
        .info {
            margin-top: 20px;
            h6,p {
                font-size: 0.8em;
                padding-top: 5px;
            }
        }

`
