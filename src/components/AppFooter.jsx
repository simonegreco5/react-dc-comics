// sezione import buy.png
import BuyDigital from '../assets/img/buy-comics-digital-comics.png'
import BuyMerch from '../assets/img/buy-comics-merchandise.png'
import BuySub from '../assets/img/buy-comics-subscriptions.png'
import BuyShop from '../assets/img/buy-comics-shop-locator.png'
import BuyVisa from '../assets/img/buy-dc-power-visa.svg'

export default function AppFooter(){

    return(
        <footer>

            {/* barra orizzontale blu */}
            <section className='buyBar'>
                <div>
                    <img src={BuyDigital} alt="" />
                    <a href="">digital comics</a>
                </div>
                <div>
                    <img src={BuyMerch} alt="" />
                    <a href="">dc merchandise</a>
                </div>
                <div>
                    <img src={BuySub} alt="" />
                    <a href="">subscription</a>
                </div>
                <div>
                    <img src={BuyShop} alt="" />
                    <a href="">comic shop locator</a>
                </div>
                <div>
                    <img src={BuyVisa} alt="" />
                    <a href="">dc power visa</a>
                </div>
            </section>

            {/* sezione info con logo in background */}
            <section className='linkSection'>
                <div>
                    <h3 className='dcComics'>DC COMICS</h3>
                    <a href="">Characters</a>
                    <a href="">Comics</a>
                    <a href="">Movies</a>
                    <a href="">TV</a>
                    <a href="">Games</a>
                    <a href="">Videos</a>
                    <a href="">News</a>
                </div>
                <div>
                    <h3 className='shop'>SHOP</h3>
                    <a href="">Shop DC</a>
                    <a href="">Shop DC Collect</a>
                </div>
                <div>
                    <h3 className='dc'>DC</h3>
                    <a href="">Term Of Use</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Ad Choices</a>
                    <a href="">Advertising</a>
                    <a href="">Jobs</a>
                    <a href="">Subscriptions</a>
                    <a href="">Talent Workshops</a>
                    <a href="">CPSC Certificates</a>
                    <a href="">Ratings</a>
                    <a href="">Shop Help</a>
                    <a href="">Contact Us</a>
                </div>
                <div>
                    <h3 className='sites'>SITES</h3>
                    <a href="">DC</a>
                    <a href="">MAD Magazine</a>
                    <a href="">DC Kids</a>
                    <a href="">DC Universe</a>
                    <a href="">DC Power Visa</a>
                </div>
            </section>
        </footer>
    )
}