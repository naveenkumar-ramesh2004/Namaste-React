import './Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faShoppingCart } from "@fortawesome/free-solid-svg-icons";
 /*-Header
   *   - Logo
   *   - Navigation
   *      - Home
   *      - About
   *      - Contact
   *      - Cart
   *   - Login/Signup
   * 
   * */

const Header = () => {
    return (
        <header>
            <div className="Logo">
                <img src="./src/assets/SoruVandi.png" alt="Soru Vandi" className="Logoimg"/>
            </div>
            <nav>
                <ul className="Navigation">
                    <li><a href="#home">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Cart<FontAwesomeIcon icon={faShoppingCart } style={{paddingLeft:'4px',fontSize:'13px',paddingBottom:'1px'}}></FontAwesomeIcon></a></li>
                </ul>
            </nav>
            <div className="AuthBtn">
                <button className="LoginBtn">Login<FontAwesomeIcon icon={faUser} style={{paddingLeft:'3px',paddingBottom:'1px',fontSize:'14px'}}></FontAwesomeIcon></button>
            </div>
        </header>
    )
}


export default Header;