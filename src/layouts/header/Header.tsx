import { Logo, Menu, Search } from "./components";
import "./styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
      <Menu />
    </div>
  );
}

export default Header;
