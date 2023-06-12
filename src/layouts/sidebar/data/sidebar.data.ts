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
    children: {
      title: "Tested",
      links: [
        {
          id: 0.1,
          route: "",
          name: "Part 1: Overview",
        },
        {
          id: 0.2,
          route: "",
          name: "Part 2: Containerize an application",
        },
      ],
    },
  },
];
