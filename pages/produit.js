
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer";
import Styles from "./styles/style.css"

const Produit = () =>  {
    return(
        <div>
           <NavBar />
           <main>
           <h1>Fiche produit</h1>
           <p>Welcome to the catalogue page. Here you can browse our products.</p>
           </main>
           <Footer />
        </div>
       
    )

}
export default Produit;