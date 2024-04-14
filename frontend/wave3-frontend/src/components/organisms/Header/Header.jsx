import Redirection from "../../atoms/Redirection/Redirection"
import Image from "../../atoms/Image/Image"
import logo from "../../../assets/images/wave3.png"
import './Header.css'
function Header(){

    let Home = "Home"
    let about = "About Blockchain"
    let login = "Login"
    let signup = "Signup"

    return(
        <div className="header-bar-root">
        <div className="header-image">
        <Image src={logo}></Image>
        </div>
        <div className="header-links">
        <Redirection to={"/"} className="redirection-base-config">{Home}</Redirection>
        <Redirection to={"/about"} className="redirection-base-config">{about}</Redirection>
        <Redirection to={"/login"} className="redirection-base-config">{login}</Redirection>
        <Redirection to={"/signup"} className="redirection-signup-link">{signup}</Redirection>
        </div>
        </div>
    )
}

export default Header