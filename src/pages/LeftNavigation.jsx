import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavigation = () => {
  const navigationData = [
    {
      name: 'Parent 1',
      path: '/parent1',
      children: [
        {
          name: 'Child 1',
          path: '/parent1/child1',
        },
        {
          name: 'Child 2',
          path: '/parent1/child2',
          children: [
            {
              name: 'Sub-Child 1',
              path: '/parent1/child2/subchild1',
            },
          ],
        },
      ],
    },
    {
      name: 'Parent 2',
      path: '/parent2',
    },
  ];

  return (
    <nav className="left-navigation">
      <ul className="left-navigation__list">
        {navigationData.map((item, index) => (
          <li key={index} className={`left-navigation__item ${item.path === window.location.pathname ? 'active' : ''}`}>
            <Link to={item.path}>{item.name}</Link>
            {item.children && (
              <ul className="left-navigation__sub-list">
                {item.children.map((subItem, subIndex) => (
                  <li key={subIndex} className={`left-navigation__sub-item ${subItem.path === window.location.pathname ? 'active' : ''}`}>
                    <Link to={subItem.path}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LeftNavigation;