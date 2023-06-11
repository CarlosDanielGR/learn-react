import { ISidebar } from "../interfaces/sidebar.interface";
import "./../styles/Link.scss";

interface LinkProps {
  link: ISidebar;
  isActive: boolean;
  onActive: (id: number) => void;
}

function Link({ link, onActive, isActive }: LinkProps) {
  const handleActive = () => {
    onActive(link.id);
  };

  return (
    <a
      className={"link" + " " + (isActive ? "link--active" : "")}
      onClick={handleActive}
    >
      {link.name}
    </a>
  );
}

export default Link;
