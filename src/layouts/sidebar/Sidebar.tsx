import { Accordion, Link } from "./components";
import { LINKS_SIDEBAR } from "./data/sidebar.data";
import "./styles/Sidebar.scss";

function Sidebar() {
  return (
    <section className="sidebar">
      {LINKS_SIDEBAR.map((link) => (
        <Link key={link.id} link={link} />
      ))}
      <Accordion />
    </section>
  );
}

export default Sidebar;
