import * as S from "./styles"
import Logo from "../../molecules/Logo";
import Menu from "../../molecules/Menu";
import Button from "../../atoms/Primary-Button";


const Header = () => {
    return <S.Box> 
        <Logo></Logo>
        <Menu></Menu>
        <Button></Button>
    </S.Box> 
}

export default Header;