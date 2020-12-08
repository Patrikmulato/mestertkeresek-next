import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { useState } from 'react';
import { list } from './items';
import Image from 'next/image';

interface MenuItemsInterface {
  classes: Record<
    'list' | 'fullList' | 'root' | 'menuButton' | 'title' | 'nested',
    string
  >;
}

const MenuItems: React.FC<MenuItemsInterface> = ({ classes }) => {
  const [isCollapsed, setIsCollapsed] = useState({});
  const handleClick = (name: string) => {
    setIsCollapsed({ ...isCollapsed, [name]: !isCollapsed[name] });
  };
  return (
    <List className={classes.list}>
      <ListItem>
        <Image
          src='/static/images/logo-two-line.png'
          alt='logo'
          height='50px'
          width='148px'
        />
      </ListItem>

      {list.map((item) => {
        return (
          <div key={item.id}>
            {item.subitems != null ? (
              <div>
                <ListItem button onClick={() => handleClick(item.name)}>
                  <ListItemText primary={item.name} />
                  {isCollapsed[item.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  component='li'
                  in={isCollapsed[item.name]}
                  timeout='auto'
                  unmountOnExit
                >
                  <List disablePadding>
                    {item.subitems.map((subitem) => {
                      return (
                        <ListItem
                          button
                          key={subitem.id}
                          className={classes.nested}
                        >
                          <ListItemText
                            key={subitem.id}
                            primary={subitem.name}
                          />
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItem button onClick={() => handleClick(item.name)}>
                <ListItemText primary={item.name} />
              </ListItem>
            )}
          </div>
        );
      })}
    </List>
  );
};

export default MenuItems;
