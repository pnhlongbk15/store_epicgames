import "./styles/styledFooterBody.scss";

export const FooterBody = ()=>(
    <footer className="footer-body">
        <div className="footer-body-wrap">
            <img src="https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=1080&resize=1&w=1920" alt=""/>
            <div className="content">
                <div>
                    <h4>explore our catalog</h4>
                    <h6>
                        Browse by genre, features, price, and more to find your next favorite game.
                    </h6>
                </div>
                <button>learn more</button>
            </div>
        </div>
    </footer>
)