import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@mui/material";
import "./../styles/ButtonModal.scss";

function ButtonMenu() {
  return (
    <Button className="buttonMenu" aria-label="Menu">
      <GiHamburgerMenu />
    </Button>
  );
}

export default ButtonMenu;
