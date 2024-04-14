import Redirection from "../../atoms/Redirection/Redirection"
import Image from "../../atoms/Image/Image"
import './Header.css'
import logo from "../../../assets/images/wave3.png"
function Header(){

    let about = "About"
    let loan = "Loan"
    let login = "Login"
    let signup = "Signup"

    return(
        <div className="header-bar-root">
        <div className="header-image">
        <Image src={logo}></Image>
        </div>
        <div className="header-links">
        <Redirection to={"/about"} className="redirection-base-config">{about}</Redirection>
        <Redirection to={"/loan"} className="redirection-base-config">{loan}</Redirection>
        <Redirection to={"/login"} className="redirection-base-config">{login}</Redirection>
        <Redirection to={"/login"} className="redirection-base-config">{login}</Redirection>
        <Redirection to={"/signup"} className="redirection-signup-link">{signup}</Redirection>
        </div>
        </div>
    )
}

export default Header