import Header from "../organisms/Header/Header";
import Text from "../atoms/Text/Text";
import Image from "../atoms/Image/Image";
import Button from "../atoms/Button/Button"

import "../../assets/styles/Loan.css"
let frontphotoID = "Front Photo With Identification"
let frontID = "Front Identification"
let backID = "Identification from the back"
let buttontext = "Send"
function Loan(){
   
    return(
   <>
   <div className="background">

    <Header></Header>
    <div className="cards">
    <div className="card">
        <Text>{frontphotoID}</Text>
    </div>
    <div className="card">
        <Text>{frontID}</Text>
    </div>
    <div className="card">
        <Text>{backID}</Text>
    </div>
    </div>
    <Button className="cardsbackground">{buttontext}</Button>
    </div>
    </>
    )
}

export default Loan;
