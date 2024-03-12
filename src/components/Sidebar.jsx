// Sidebar.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { routes } from "./data";
import Rightnavigation from "./Rightnavigation";

const Sidebar = ({ isOpen, children }) => {
  // Receive isOpen prop
  const [expandedRoutes, setExpandedRoutes] = React.useState([]);
  const [expandedRightRoutes, setExpandedRightRoutes] = React.useState([]);

  const toggleDropdown = (routeName) => {
    if (expandedRoutes.includes(routeName)) {
      setExpandedRoutes(expandedRoutes.filter((route) => route !== routeName));
    } else {
      setExpandedRoutes([...expandedRoutes, routeName]);
    }
  };

  const isRouteExpanded = (routeName) => {
    return expandedRoutes.includes(routeName);
  };

  const toggleRightDropdown = (routeName) => {
    if (expandedRightRoutes.includes(routeName)) {
      setExpandedRightRoutes(
        expandedRightRoutes.filter((route) => route !== routeName)
      );
    } else {
      setExpandedRightRoutes([...expandedRightRoutes, routeName]);
    }
  };

  const isRightRouteExpanded = (routeName) => {
    return expandedRightRoutes.includes(routeName);
  };

  return (
    <AnimatePresence>
      {isOpen && ( // Show sidebar if isOpen is true
        <motion.div
          className="sidebar"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
        >
          <div className="top-section"></div>
          <section className="routes">
            {routes.map((route) => (
              <div key={route.id || route.path}> {/* Use a unique identifier as the key */}
                <div className="route-container">
                  <NavLink
                    to={route.path}
                    className="link"
                    onClick={() => {
                      toggleDropdown(route.name);
                    }}
                  >
                    {route.name}
                  </NavLink>
                  {route.child && (
                    <div
                      className="icon-container"
                      onClick={() => toggleDropdown(route.name)}
                    >
                      {isRouteExpanded(route.name) ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowForward />
                      )}
                    </div>
                  )}
                </div>
                {route.child && isRouteExpanded(route.name) && (
                  <div>
                    {route.child.map((child) => (
                      <div key={child.id || child.path}> {/* Use a unique identifier as the key */}
                        <div className="route-container">
                          <NavLink
                            to={child.path}
                            className="link"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown(child.name);
                            }}
                          >
                            {child.name}
                          </NavLink>
                          {child.child && (
                            <div
                              className="icon-container"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleDropdown(child.name);
                              }}
                            >
                              {isRouteExpanded(child.name) ? (
                                <IoIosArrowDown />
                              ) : (
                                <IoIosArrowForward />
                              )}
                            </div>
                          )}
                        </div>
                        {child.child && isRouteExpanded(child.name) && (
                          <div>
                            {child.child.map((subChild) => (
                              <div key={subChild.id || subChild.path}> {/* Use a unique identifier as the key */}
                                <div className="route-container">
                                  <NavLink
                                    to={subChild.path}
                                    className="link"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleDropdown(subChild.name);
                                    }}
                                  >
                                    {subChild.name}
                                  </NavLink>
                                  {subChild.child && (
                                    <div
                                      className="icon-container"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleDropdown(subChild.name);
                                      }}
                                    >
                                      {isRouteExpanded(subChild.name) ? (
                                        <IoIosArrowDown />
                                      ) : (
                                        <IoIosArrowForward />
                                      )}
                                    </div>
                                  )}
                                </div>
                                {subChild.child &&
                                  isRouteExpanded(subChild.name) && (
                                    <div>
                                      {subChild.child.map(
                                        (subSubChild) => (
                                          <div key={subSubChild.id || subSubChild.path}> {/* Use a unique identifier as the key */}
                                            <NavLink
                                              to={subSubChild.path}
                                              className="link"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                toggleDropdown(
                                                  subSubChild.name
                                                );
                                              }}
                                            >
                                              {subSubChild.name}
                                            </NavLink>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        </motion.div>
      )}

      <main className={isOpen ? "action open" : "action closed"}>
        {children}
      </main>
    </AnimatePresence>
  );
};

export default Sidebar;
