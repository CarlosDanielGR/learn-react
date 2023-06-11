import { Accordion, Link } from "./components";
import { LINKS_SIDEBAR } from "./data/sidebar.data";
import "./styles/Sidebar.scss";

function Sidebar() {
  return (
    <section className="sidebar">
      {LINKS_SIDEBAR.map((link) => {
        if (link.children) return <Accordion />;
        return <Link key={link.id} link={link} />;
      })}
    </section>
  );
}

export default Sidebar;
