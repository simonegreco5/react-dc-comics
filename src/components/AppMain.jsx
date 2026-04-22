// sezione import 
import Jumbotron from '../assets/img/jumbotron.jpg'
import comics from '../assets/array/comics'

import AppFilm from './AppFilm'

export default function AppMain(){



    return(
        <main>
           
           {/* jumbotron */}
           <div>
            <img src={Jumbotron} alt="" />
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
                        />
                         
                    ))
                } 
            </div>

                <button className='bottone'>LOAD MORE</button>
           </div>

  
        </main>
    )
}