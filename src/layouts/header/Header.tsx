import { Logo, Menu, Search } from "./components";
import "./styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
      <Menu />
    </header>
  );
}

export default Header;
