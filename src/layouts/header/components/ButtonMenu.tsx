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
    <button
      type="button"
      className="buttonModal"
      onClick={() => toggleButtonMenu(isOpenModal)}
    >
      <GiHamburgerMenu />
      <Menu isOpen={isOpenModal} />
    </button>
  );
}

export default ButtonMenu;
