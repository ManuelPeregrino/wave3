import Header from "../organisms/Header/Header"
import Headline from "../organisms/Headline/Headline"
import "../../assets/styles/Landing.css"
function Landing(){

    return(
        <>
        <div className="landing-div-root">
        <Header></Header>
        <Headline></Headline>
        </div>
        </>
    )
}

export default Landing