import { color } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Rightnavigation = ({ isOpen, expandedRightRoutes, toggleRightDropdown, isRightRouteExpanded }) => {
  const [activeParent, setActiveParent] = useState(null); // State to track active parent

  const routesForRightNav = [
    {
      name: "Action Column",
      child: [
        { name: "Ellipsis" },
        { name: "Link Filter" },
        { name: "Forward" },
        { name: "Hamburger" },
      ],
    },
  ];

  const handleParentClick = (routeName) => {
    toggleRightDropdown(routeName);
    setActiveParent(routeName); // Set active parent
  };

  return (
    <div className={`right-nav ${isOpen ? "open" : "closed"}`}>
      {routesForRightNav.map((route, index) => (
        <div key={index}>
          <div className="route-container">
            <div className="link" onClick={() => handleParentClick(route.name)} style={{color:"red",fontWeight:"bold"}}>
              {route.name}
            </div>
            {route.child && (
              <div className="icon-container" onClick={() => handleParentClick(route.name)}>
                <div className="icon-box">
                  {isRightRouteExpanded(route.name) ? <IoIosArrowUp className="icon" /> : <IoIosArrowDown className="icon" />}
                </div>
              </div>
            )}
          </div>
          {route.child && isRightRouteExpanded(route.name) && (activeParent === route.name) && ( // Only render children if activeParent matches current route
            <div>
              {route.child.map((child, index) => (
                <div key={index} className="child-container">
                  <div className="child-link">{child.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Rightnavigation;
