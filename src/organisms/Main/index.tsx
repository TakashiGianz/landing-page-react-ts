import ContactButton from "../../atoms/Contact-Button";
import * as S from "./styles"
import womanImg from "../../../public/woman.png"

const Main = () => {
    return <S.MainStyle> 
        <S.TextsDiv>
        <h1>Design driven development of your web product</h1>
        <h6>We are a full service digital agency that builds immesive user experience.</h6>
        <ContactButton></ContactButton> 
      </S.TextsDiv>
      <S.ImagesDiv>
       <img src={womanImg} alt="woman doing research"/>
      </S.ImagesDiv>
      
    </S.MainStyle> 
}

export default Main;