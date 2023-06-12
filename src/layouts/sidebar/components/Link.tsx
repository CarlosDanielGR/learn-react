import { ISidebar } from "../interfaces/sidebar.interface";
import "./../styles/Link.scss";

interface ILinksProps {
  linkData: ISidebar;
  isActive: boolean;
  onActive: (id: number) => void;
}

function Link({ linkData, onActive, isActive }: ILinksProps) {
  const handleActive = () => {
    onActive(linkData.id);
  };

  return (
    <a
      className={"link" + " " + (isActive ? "link--active" : "")}
      onClick={handleActive}
    >
      {linkData.name}
    </a>
  );
}

export default Link;
