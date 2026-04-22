// sezione import

import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"

// sezione import - (centralizzazione array) 
import comics from "./assets/array/comics.js" // main
import menu from "./assets/array/menu.js" // header (nav)
import dcComicsList from "./assets/array/dcComicsArr.js"
import shopList from "./assets/array/shopArr.js"
import dcList from "./assets/array/dcArr.js"
import sitesList from "./assets/array/sitesArr.js"

function App() {
  

  return (
    <>

      <AppHeader menu={menu} />
      <AppMain comics={comics} />
      <AppFooter dcComicsList={dcComicsList} shopList={shopList}
       dcList={dcList} sitesList={sitesList} />
  
    </>
  )

}

export default App
