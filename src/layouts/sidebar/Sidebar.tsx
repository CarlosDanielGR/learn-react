import { useState } from "react";
import { useDispatch } from "react-redux";
import { Accordion, Link } from "./components";
import { LINKS_SIDEBAR } from "./data/sidebar.data";
import { ILinks } from "./interfaces/sidebar.interface";
import { newLinkActive } from "../../redux/states/sidebar.state";
import "./styles/Sidebar.scss";

function Sidebar() {
  const dispatch = useDispatch();

  const [linkActive, setLinkActive] = useState(0);

  const handleLinkActive = (id: number) => {
    setLinkActive(id);
    dispatch(newLinkActive(id));
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
