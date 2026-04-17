// sezione import buy.png
import BuyDigital from '../assets/img/buy-comics-digital-comics.png'
import BuyMerch from '../assets/img/buy-comics-merchandise.png'
import BuySub from '../assets/img/buy-comics-subscriptions.png'
import BuyShop from '../assets/img/buy-comics-shop-locator.png'
import BuyVisa from '../assets/img/buy-dc-power-visa.svg'

// sezione import social.png
import Facebook from '../assets/img/footer-facebook.png'
import Twitter from '../assets/img/footer-twitter.png'
import Youtube from '../assets/img/footer-youtube.png'
import Pinterest from '../assets/img/footer-pinterest.png'
import Periscope from '../assets/img/footer-periscope.png'

// sezione import array.js
import dcComicsList from '../assets/array/dcComicsArr'
import shopList from '../assets/array/shopArr'
import dcList from '../assets/array/dcArr'
import sitesList from '../assets/array/sitesArr'


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
                    {
                        dcComicsList.map((element)=>(
                            <a href="" key={element.id}>{element.nome}</a>
                        ))
                    }
                </div>
                <div>
                    <h3 className='shop'>SHOP</h3>
                    {
                        shopList.map((element)=>(
                            <a href="" key={element.id}>{element.nome}</a>
                        ))
                    }
                </div>
                <div>
                    <h3 className='dc'>DC</h3>
                    {
                        dcList.map((element)=>(
                            <a href="" key={element.id}>{element.nome}</a>
                        ))
                    }
                </div>
                <div>
                    <h3 className='sites'>SITES</h3>
                    {
                        sitesList.map((element)=>(
                            <a href="" key={element.id}>{element.nome}</a>
                        ))
                    }
                </div>
            </section>

            {/* sezione accesso + social */}
            <section className='socialBar'>
                <button><div>SIGN-UP NOW!</div></button>
                <div className='icon'>
                    <div>FOLLOW US</div>
                    <a href=""><img src={Facebook} alt="" /></a>
                    <a href=""><img src={Twitter} alt="" /></a>
                    <a href=""><img src={Youtube} alt="" /></a>
                    <a href=""><img src={Pinterest} alt="" /></a>
                    <a href=""><img src={Periscope} alt="" /></a>
                </div>
            </section>

        </footer>
    )
}