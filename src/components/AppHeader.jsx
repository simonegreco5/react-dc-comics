// sezione import 
import AppLogo from '../assets/img/dc-logo.png'
const menu = [
    {
        id: 0,
        nome: 'characters',
        classe: '', 
    },
    {
        id: 1,
        nome: 'comics', 
        classe: 'select',
    },
    {
        id: 2,
        nome: 'movies', 
        classe: '',
    },
    {
        id: 3,
        nome: 'tv', 
        classe: '',
    },
    {
        id: 4,
        nome: 'games', 
        classe: '',
    },
    {
        id: 5,
        nome: 'collectibles',
        classe: '', 
    },
    {
        id: 6,
        nome: 'video', 
        classe: '',
    },
    {
        id: 7,
        nome: 'fans', 
        classe: '',
    },
    {
        id: 8,
        nome:'news', 
        classe: '',
    },
    {
        id: 9,
        nome: 'shop',
        classe: '',
    }
]

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