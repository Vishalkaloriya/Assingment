// data.js (Updated)
import { IoIosArrowForward } from "react-icons/io";

export const routes = [
  {
    id: "r1",
    path: "/page",
    name: "R2023.12 Release Notes",
    icon1: <IoIosArrowForward />,
    child: [],
  },
  {
    id: "r2",
    path: "/page",
    name: "UI Navigation Tour",
    icon1: <IoIosArrowForward />,
    child: [
      {
        id: "r2-1",
        path: "/page/page1",
        name: "Tour of User Interface",
        icon1: <IoIosArrowForward />,
        child:[],
      },
      {
        id: "r2-2",
        path: "/page/page1",
        name: "Report Types",
        icon1: <IoIosArrowForward />,
        child: [
          {
            id: "r2-2-1",
            path: "/page/page1/widgets",
            name: "Widgets: Categories and Details",
            icon1: <IoIosArrowForward />,
            child:[],
          },
          {
            id: "r2-2-2",
            path: "/page/page1/action-column",
            name: "Action Column",
            icon1: <IoIosArrowForward />,
            child: [
              {
                id: "r2-2-2-1",
                path: "/page/page1/ellipsis",
                name: "Ellipsis",
              },
              {
                id: "r2-2-2-2",
                path: "/page/page1/link-filter",
                name: "Link Filter",
              },
              {
                id: "r2-2-2-3",
                path: "/page/page1/forward",
                name: "Forward",
              },
              {
                id: "r2-2-2-4",
                path: "/page/page1/hamburger",
                name: "Hamburger",
              },
            ],
          },
          {
            id: "r2-2-3",
            path: "/page/page1/local-button",
            name: "Local Action Button",
            icon1: <IoIosArrowForward />,
            child:[],
          },
        ],
      },
    ],
  },
  {
    id: "r3",
    path: "/page",
    name: "Production Scheduling",
    icon1: <IoIosArrowForward />,
    child: [],
  },
  {
    id: "r4",
    path: "/page",
    name: "Next Generation Procurement",
    icon1: <IoIosArrowForward />,
    child:[],
  },
  {
    id: "r5",
    path: "/page",
    name: "Data Integration",
    icon1: <IoIosArrowForward />,
    child:[],
  },
  {
    id: "r6",
    path: "/page",
    name: "Supply Planning",
    icon1: <IoIosArrowForward />,
    child:[],
  },
  {
    id: "r7",
    path: "/page",
    name: "Demand Planning",
    icon1: <IoIosArrowForward />,
    child:[],
  },
  {
    id: "r8",
    path: "/page",
    name: "Knowledge Hub",
    icon1: <IoIosArrowForward />,
    child:[],
  },
  {
    id: "r9",
    path: "/page",
    name: "Sustainability Solutions",
    icon1: <IoIosArrowForward />,
    child:[],
  },
];
