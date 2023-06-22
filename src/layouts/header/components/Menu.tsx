import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ButtonMenu } from ".";
import { Sidebar } from "../..";
import "./../styles/Menu.scss";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtonMenu = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <div className="menu">
      <ButtonMenu onClick={() => toggleButtonMenu(true)} />
      <Drawer open={isOpen} onClose={() => toggleButtonMenu(false)}>
        <Sidebar />
      </Drawer>
    </div>
  );
}
