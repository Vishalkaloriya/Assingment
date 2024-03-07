import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
export const routes = [
  
  {
    path: "/page",
    name: "R2023.12 Release Notes",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child: [
      
    ],
  },
  {
    path: "/page",
    name: "UI Navigation Tour",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child: [
      {
        path: "/page/page1",
        name: "Tour of User Interface",
        icon1: <IoIosArrowForward />,
        icon2: <IoIosArrowDown />,
        child:[],
      },
      {
        path: "/page/page1",
        name: "Report Types",
        icon1: <IoIosArrowForward />,
        icon2: <IoIosArrowDown />,
        child: [
          {
            path: "/page/page1/page2",
            name: "Widgets: Categories and Details",
            icon1: <IoIosArrowForward />,
            icon2: <IoIosArrowDown />,
            child:[],
          },
          {
            path: "/page/page1/page3",
            name: "Action Column",
            icon1: <IoIosArrowForward />,
            icon2: <IoIosArrowDown />,
            child: [
              {
                name: "Ellipsis",
              },
              {
                name: "Link fIlter",
              },
              {
                name: "Forward",
              },
              {
                name: "Hamburger",
              },
            ],
          },
          {
            path: "/page/page1/page2",
            name: "Local Action Button",
            icon1: <IoIosArrowForward />,
            icon2: <IoIosArrowDown />,
            child:[],
          },
        ],
      },
      
    ],
  },
  {
    path: "/page",
    name: "Production Scheddiving",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child: [],
  },
  {
    path: "/page",
    name: "Next Generation Procurement",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child:[]
  },
  {
    path: "/page",
    name: "Data Integration",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child:[]
  },
  {
    path: "/page",
    name: "Supply Planning",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child:[]
  },
  {
    path: "/page",
    name: "Demand Planning",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child:[]
  },
  {
    path: "/page",
    name: "Knowledge Hub",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child:[]
  },
  {
    path: "/page",
    name: "Sustainability Solutions",
    icon1: <IoIosArrowForward />,
    icon2: <IoIosArrowDown />,
    child:[]
  },
  
 
];
