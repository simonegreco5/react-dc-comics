// sezione import 
import Jumbotron from '../assets/img/jumbotron.jpg'
import comics from '../assets/array/comics'

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
                    comics.map((element)=>(
                        
                        <div className="listFilm col" key={element.id}>
                            <img className='p-3' src={element.thumb} alt="" />  
                            <div className='titoloFilm'>{element.title}</div>
                        </div>
                    ))
                } 
            </div>

                <button className='bottone'>LOAD MORE</button>
           </div>

  
        </main>
    )
}