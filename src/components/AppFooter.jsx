// sezione import buy.png
// centralizzata in /public <-

// sezione import social.png
// centralizzata in /public <-

// sezione import logo background
// centralizzata in /public  <-


export default function AppFooter({dcComicsList, shopList, dcList, sitesList}){

    return(
        <footer>

               {/* barra orizzontale blu */}
               <section className='buyBar'>
                
                    <div>
                    <img src='/img/buy-comics-digital-comics.png' alt="" />
                    <a href="">digital comics</a>
                    </div>
                    <div>
                    <img src='/img/buy-comics-merchandise.png' alt="" />
                    <a href="">dc merchandise</a>
                    </div>
                    <div>
                    <img src='/img/buy-comics-subscriptions.png' alt="" />
                    <a href="">subscription</a>
                    </div>
                    <div>
                    <img src='/img/buy-comics-shop-locator.png' alt="" />
                    <a href="">comic shop locator</a>
                    </div>
                    <div>
                    <img src='/img/buy-dc-power-visa.svg' alt="" />
                    <a href="">dc power visa</a>
                    </div>
                
               </section>

               {/* sezione info con logo in background */}
               <section className='linkSection'>
                <div className='contenitoreF'>

                    {/* link */}
                    <div className='linkF'>

                        {/* dc comics + shop */}
                        <div>
                            <h3 className='dcComics'>DC COMICS</h3>
                            {
                                dcComicsList.map((element)=>(
                                    <a href="" key={element.id}>{element.nome}</a>
                                ))
                            }
                            <h3 className='shop'>SHOP</h3>
                            {
                                shopList.map((element)=>(
                                    <a href="" key={element.id}>{element.nome}</a>
                                ))
                            }
                        </div>

                        {/* dc */}
                        <div>
                            <h3 className='dc'>DC</h3>
                            {
                                dcList.map((element)=>(
                                    <a href="" key={element.id}>{element.nome}</a>
                                ))
                            }
                        </div>

                        {/* sites */}
                        <div>
                            <h3 className='sites'>SITES</h3>
                            {
                                sitesList.map((element)=>(
                                    <a href="" key={element.id}>{element.nome}</a>
                                ))
                            }
                        </div>
                    </div>

                    {/* dc logo background */}
                    <div className='logoBg'>
                       <img src='/img/dc-logo-bg.png' alt="" /> 
                    </div>

                </div>
               </section>

               {/* sezione accesso + social */}
               <section className='socialBar'>
                <button><div>SIGN-UP NOW!</div></button>
                <div className='icon'>
                    <div>FOLLOW US</div>
                    <a href=""><img src='/img/footer-facebook.png' alt="" /></a> 
                    <a href=""><img src='/img/footer-twitter.png' alt="" /></a>
                    <a href=""><img src='/img/footer-youtube.png' alt="" /></a>
                    <a href=""><img src='/img/footer-pinterest.png' alt="" /></a>
                    <a href=""><img src='/img/footer-periscope.png' alt="" /></a>
                </div>
               </section>  

        </footer>
    )
}