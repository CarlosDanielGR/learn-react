import { FiChevronDown } from "react-icons/fi";
import AccordionMat from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./../styles/Accordion.scss";

interface IAccProps {
  content: JSX.Element[];
  title: string;
}

function Accordion({ content, title }: IAccProps) {
  return (
    <AccordionMat className="accordion">
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<FiChevronDown />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </AccordionMat>
  );
}

export default Accordion;
