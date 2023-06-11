import { ISidebar } from "../interfaces/sidebar.interface";
import "./../styles/Link.scss";

interface LinkProps {
  link: ISidebar;
}

function Link({ link }: LinkProps) {
  return (
    <a className="link" href={link.route}>
      {link.name}
    </a>
  );
}

export default Link;
