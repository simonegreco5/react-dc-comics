// sezione import 
import AppLogo from '../assets/img/dc-logo.png'
import menu from '../assets/array/menu'

export default function AppHeader(){

    return(

        <header>

            {/* logo */}
            <img src={AppLogo} alt="" />

            {/* nav */}
            <nav>
            {menu.map((item) => (
                <a href="" key={item.id} className={item.classe}>{item.nome}</a>
            ))}
            </nav>
            
        </header>
    )
}