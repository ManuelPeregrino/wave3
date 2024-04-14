import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import Redirection from "../../atoms/Redirection/Redirection";
import usdc from "../../../assets/images/usdc.png";
import "./Headline.css"

function Headline(){

    let calltoaction = "Apply for loan"

    let MainHeadline = "The best place to request a loan, in the most transparent way."
    let SubHeadline = "Obtain credits quickly, securely and transparently thanks to our blockchain-based platform. At Wave3, we're redefining the way you access financing, offering you a hassle-free, middleman-free experience."
    return(
        <div className="div-headline-background">
            <div className="div-headline-container">
            <div className="div-headline-text">
                <Text className="MainHeadline">{MainHeadline}</Text>
                <Text className="SubHeadline">{SubHeadline}</Text>
                <div className="div-call-to-action">
                <Redirection to={"/login"} className="calltoaction">{calltoaction}</Redirection>
                </div>
            </div>
            </div>
            <div className="div-headline-image">
                <Image src={usdc} className="image-headline-resize"></Image>
            </div>
            
        </div>
    )
}

export default Headline