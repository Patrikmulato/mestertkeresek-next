import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

interface NavbarInterface {
  classes: Record<
    'list' | 'fullList' | 'root' | 'menuButton' | 'title' | 'nested' | 'appBar',
    string
  >
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
  isLoggedIn: boolean
}

const Navbar: React.FC<NavbarInterface> = ({
  classes,
  toggleDrawer,
  isLoggedIn,
}: NavbarInterface) => {
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Mesterkeresek.hu
        </Typography>
        {isLoggedIn ? <div></div> : <Button color="inherit">Bejelentkezés</Button>}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
