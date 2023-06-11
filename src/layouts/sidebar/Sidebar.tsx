import { Accordion, Link } from "./components";
import "./styles/Sidebar.scss";

function Sidebar() {
  return (
    <section className="sidebar">
      <Link />
      <Accordion />
    </section>
  );
}

export default Sidebar;
