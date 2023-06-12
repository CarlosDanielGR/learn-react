import { useState } from "react";
import { Accordion, Link } from "./components";
import { LINKS_SIDEBAR } from "./data/sidebar.data";
import "./styles/Sidebar.scss";

function Sidebar() {
  const [linkActive, setLinkActive] = useState(0);

  const handleLinkActive = (id: number) => {
    setLinkActive(id);
  };

  return (
    <section className="sidebar">
      {LINKS_SIDEBAR.map((link) => {
        if (link.children) return <Accordion key={link.id} />;
        return (
          <Link
            key={link.id}
            link={link}
            onActive={handleLinkActive}
            isActive={linkActive === link.id}
          />
        );
      })}
    </section>
  );
}

export default Sidebar;
