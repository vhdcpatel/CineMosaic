import logo from "../../assets/mainLogo.png"
import Wrapper from "../wrapper/Wrapper";
import "./errorPageStyles.css";

const HeaderError = () => {
  return (
    <header className="err_header">
      <Wrapper className="err_contentWrapper">
        <div className="err_logo">
          <img src={logo} alt="Logo png image" />
          CineMosic
        </div>
      </Wrapper>
    </header>
  );
}

export default HeaderError