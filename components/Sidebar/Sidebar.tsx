import { SwipeableDrawer } from '@material-ui/core'
import React from 'react'
import MenuItems from './MenuItems/MenuItems'

interface SidebarInterface {
  isOpen: boolean
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
  iOS: boolean
  classes: Record<
    'list' | 'fullList' | 'root' | 'menuButton' | 'title' | 'nested' | 'sidebar',
    string
  >
}
const Sidebar: React.FC<SidebarInterface> = ({ isOpen, toggleDrawer, iOS, classes }) => {
  return (
    <SwipeableDrawer
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <MenuItems classes={classes} />
    </SwipeableDrawer>
  )
}

export default Sidebar
