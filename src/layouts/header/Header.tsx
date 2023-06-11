import { ButtonMenu, Logo, Search } from "./components";
import "./styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
      <ButtonMenu />
    </div>
  );
}

export default Header;
