export default function AppFilm ({title, src}){

    // console.log(props)
    // const {title, src} = props -> altrienti li richiamo direttamente sopra

    return (
        <>
        <div className="listFilm col">
            <img className='p-3' src={src} alt="" />  
            <div className='titoloFilm'>{title}</div>
        </div>
        </>
    )
}