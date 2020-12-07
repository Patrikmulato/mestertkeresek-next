import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import React, { useState } from 'react';
import { list } from './items';
import Logo from '../../../../public/static/images/logo-two-line.png';

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
        <img src={Logo} alt='logo' />
      </ListItem>

      {list.map((item) => {
        return (
          <div key={item.id}>
            {item.subitems != null ? (
              <div key={item.id}>
                <ListItem
                  button
                  key={item.id}
                  onClick={() => handleClick(item.name)}
                >
                  <ListItemText primary={item.name} />
                  {isCollapsed[item.name] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse
                  key={item.id}
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
              <ListItem
                button
                onClick={() => handleClick(item.name)}
                key={item.id}
              >
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
