import { Logo, Search } from "./components";
import "./styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Search />
    </div>
  );
}

export default Header;
