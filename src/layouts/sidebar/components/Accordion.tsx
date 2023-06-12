import { FiChevronDown } from "react-icons/fi";
import AccordionMat from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./../styles/Accordion.scss";

function Accordion() {
  return (
    <AccordionMat className="accordion">
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        expandIcon={<FiChevronDown />}
      >
        Accordion 1
      </AccordionSummary>
      <AccordionDetails></AccordionDetails>
    </AccordionMat>
  );
}

export default Accordion;
