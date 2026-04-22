// sezione import 
// import AppLogo from '../assets/img/dc-logo.png' // -> centralizzata in /public

export default function AppHeader({menu}){

    return(

        <header>

            {/* logo */}
            <img src='/img/dc-logo.png' alt="" />


            {/* nav */}
            <nav>
            {menu.map((item) => (
                <a href="" key={item.id} className={item.classe}>{item.nome}</a>
            ))}
            </nav>
            
        </header>
    )
}