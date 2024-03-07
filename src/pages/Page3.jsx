import React, { useState } from "react";
import { FaLink } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import "./page3.css";
import { FaBars } from "react-icons/fa";
import Rightnavigation from "../components/Rightnavigation";

const Page3 = () => {
  const [activeParent, setActiveParent] = useState(null); // State to track active parent

  const toggleParent = (routeName) => {
    if (activeParent === routeName) {
      // If the current parent is active, close it
      setActiveParent(null);
    } else {
      // If a different parent is clicked, toggle it
      setActiveParent(routeName);
    }
  };

  const items = [
    // Fill this array with your actual data
    {
      title: "ellipse",
      icon: <IoChatboxEllipsesOutline size={40} />,
      desc: "Description of ellipse",
    },
    {
      title: "Link Filter",
      icon: <FaLink size={40} />,
      desc: "Description of Link Filter",
    },
    {
      title: "Forward",
      icon: <IoArrowForwardCircleOutline size={40} />,
      desc: "Description of Forward",
    },
    {
      title: "Hamburger",
      icon: <FaBars size={40} />,
      desc: "Description of Hamburger",
    },
    // ...
  ];

  return (
    <div className="page3-container">
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index} className="page3-item">
            <h1>{item.title}</h1>
            {item.icon}
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="right-navigation-container">
        <Rightnavigation
          isOpen={true}
          expandedRightRoutes={[]}
          toggleRightDropdown={toggleParent} // Toggle active parent on click
          isRightRouteExpanded={(routeName) => routeName === activeParent} // Check if route is active parent
        />
      </div>
    </div>
  );
};

export default Page3;
