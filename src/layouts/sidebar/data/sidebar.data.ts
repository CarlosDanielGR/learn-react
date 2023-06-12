import { ISidebar } from "../interfaces/sidebar.interface";

export const LINKS_SIDEBAR: ISidebar[] = [
  {
    id: 0,
    name: "Docker overview",
    route: "",
  },
  {
    id: 1,
    name: "Get Docker",
    route: "",
  },
  {
    id: 2,
    name: "Get started",
    route: "",
    children: [
      {
        link: "",
        name: "Part 1: Overview",
      },
      {
        link: "",
        name: "Part 2: Containerize an application",
      },
    ],
  },
];
