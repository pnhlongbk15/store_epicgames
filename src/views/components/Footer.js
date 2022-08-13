import "./styles/styledFooter.scss";

export const Footer = () => (
    <footer className="footer">
        <div className="top">
            <div className="icon">
                <div className="social">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
                <a href="#top">
                    <i class="fa-solid fa-angle-up"></i>
                </a>
            </div>
            <div className="source">
                <h6>resources</h6>
                <div className="wrap">
                    <h4>support-a-creator</h4>
                    <h4>fan art policy</h4>
                    <h4>online services</h4>
                    <h4>publish on epic games</h4>
                    <h4>ux research</h4>
                    <h4>community rules</h4>
                    <h4>careers</h4>
                    <h4>store EULA</h4>
                    <h4>epic newsroom</h4>
                    <h4>company</h4>
                </div>
            </div>
            <div className="product">
                <h6>made by epic games</h6>
                <div className="wrap">
                    <h4>battle breakers</h4>
                    <h4>robo recall</h4>
                    <h4>fortnite</h4>
                    <h4>shadow complex</h4>
                    <h4>infinity blade</h4>
                    <h4>unreal tournament</h4>
                </div>
            </div>
        </div>
        <div className="bottom">
            <p>
                © 2022, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Epic Games International, S.à r.l.   
            </p>
            <div className="wrap">
                <div>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Store Refund Policy</p>
                </div>
    
            </div>
        </div>
    </footer>
)