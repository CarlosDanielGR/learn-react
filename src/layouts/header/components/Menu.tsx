import Drawer from "@mui/material/Drawer";

interface IMenuProp {
  isOpen: boolean;
}

export default function Menu({ isOpen }: IMenuProp) {
  return (
    <Drawer anchor="top" open={isOpen}>
      <span>test</span>
    </Drawer>
  );
}
