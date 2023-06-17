import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./../styles/ButtonModal.scss";
import { Menu } from ".";

function ButtonMenu() {
  const [isOpenModal, setOpenModal] = useState(false);

  const toggleButtonMenu = (isOpen: boolean) => {
    console.log("Open modal", !isOpen);
    setOpenModal(!isOpen);
  };

  return (
    <div className="buttonModal">
      <button
        type="button"
        className="buttonModal__toggle"
        onClick={() => toggleButtonMenu(isOpenModal)}
      >
        <GiHamburgerMenu />
        <Menu isOpen={isOpenModal} />
      </button>
    </div>
  );
}

export default ButtonMenu;
