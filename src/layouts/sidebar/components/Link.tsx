import { ISidebar } from "../interfaces/sidebar.interface";

interface LinkProps {
  link: ISidebar;
}

function Link({ link }: LinkProps) {
  return <a href={link.route}>{link.name}</a>;
}

export default Link;
