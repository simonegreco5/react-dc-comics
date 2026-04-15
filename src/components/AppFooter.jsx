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
            <section>
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
        </footer>
    )
}