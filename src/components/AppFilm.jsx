export default function AppFilm ({title, src, price, badge}){

    // console.log(props)
    // const {title, src} = props -> altrienti li richiamo direttamente sopra

    return (
        <>
        <div className="listFilm col">
            <img className='p-3' src={src} alt="" />  
            {badge && <div className="badgeFilm">{badge}</div>}
            {title && <div className='titoloFilm'>{title}</div>}
            {price && <div>{price}</div>}
        </div>
        </>
    )
}