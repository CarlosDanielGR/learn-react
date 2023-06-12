import { useState } from "react";
import { Accordion, Link } from "./components";
import { LINKS_SIDEBAR } from "./data/sidebar.data";
import "./styles/Sidebar.scss";
import { ILinks } from "./interfaces/sidebar.interface";

function Sidebar() {
  const [linkActive, setLinkActive] = useState(0);

  const handleLinkActive = (id: number) => {
    setLinkActive(id);
  };

  return (
    <section className="sidebar">
      {LINKS_SIDEBAR.map((link) => {
        const contentLink = (link: ILinks) => (
          <Link
            key={link.id}
            linkData={link}
            onActive={handleLinkActive}
            isActive={linkActive === link.id}
          />
        );
        if (link.children)
          return (
            <Accordion
              key={link.id}
              title={link.children.title}
              content={link.children.links.map((link) => contentLink(link))}
            />
          );
        return contentLink(link);
      })}
    </section>
  );
}

export default Sidebar;
