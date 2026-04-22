// sezione import 
// import Jumbotron from '../assets/img/jumbotron.jpg' // -> centralizzata in /public
import AppFilm from './AppFilm'

export default function AppMain({comics}){



    return(
        <main>
           
           {/* jumbotron */}
           <div>
            <img src='/img/jumbotron.jpg' alt="" />
           </div>          

           {/* lista film */}
           <div className='film'>

            <div className='banner'>
                CURRENT SERIES
            </div>

            <div className='row row-cols-md-4 row-cols-lg-6 g-0 mt-4'>
                {
                    comics.map((comic)=>(

                        <AppFilm 
                        key={comic.id} 
                        // props={props}
                        src={comic.thumb} 
                        title={comic.title}
                        price={comic.price}
                        badge={comic.badge}
                        />
                         
                    ))
                } 
            </div>

                <button className='bottone'>LOAD MORE</button>
           </div>

  
        </main>
    )
}