import LogoHero from "../../../public/logoKreed.svg";
import * as S from "./styles"

const Logo = () => {
  return (
    <div>
      <a href="#">
      <S.LogoClick src={LogoHero} alt="Logo" />{" "}
      </a>
    </div>
  );
};

export default Logo;
