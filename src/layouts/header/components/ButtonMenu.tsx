import { GiHamburgerMenu } from "react-icons/gi";
import "./../styles/ButtonModal.scss";

function ButtonMenu() {
  const handleButtonMenu = () => {
    console.log("Open modal");
  };

  return (
    <button type="button" className="buttonModal" onClick={handleButtonMenu}>
      <GiHamburgerMenu />
    </button>
  );
}

export default ButtonMenu;
