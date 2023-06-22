import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@mui/material";
import "./../styles/ButtonModal.scss";

interface IButtonMenuProp {
  onClick?: () => void;
}

function ButtonMenu({ onClick }: IButtonMenuProp) {
  return (
    <Button className="buttonMenu" aria-label="Menu" onClick={onClick}>
      <GiHamburgerMenu />
    </Button>
  );
}

export default ButtonMenu;
