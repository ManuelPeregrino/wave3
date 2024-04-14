import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";

import usdc from "../../../assets/images/usdc.png";

import "./Headline.css"
function Headline(){

    let MainHeadline = "Transparent loans for everyone."
    let SubHeadline = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum."
    return(
        <div className="div-headline-background">
            <div className="div-headline-container">
            <div className="div-headline-text">
                <Text className="MainHeadline">{MainHeadline}</Text>
                <Text className="SubHeadline">{SubHeadline}</Text>
            </div>
            </div>
            <div className="div-headline-image">
                <Image src={usdc} className="image-headline-resize"></Image>
            </div>
            
        </div>
    )
}

export default Headline