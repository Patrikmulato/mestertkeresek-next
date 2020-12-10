import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Container, createStyles, Theme } from '@material-ui/core'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 300,
      color: '#FFFF',
    },
    fullList: {
      width: 'auto',
    },
    appBar: {
      flexGrow: 1,
      background: theme.palette.background.paper,
      color: '#FFFF',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    /* sidebar: {
      color: '#FFFF',
    }, */
  })
)

export default function Layout({ children }) {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }

  return (
    <>
      <Navbar classes={classes} toggleDrawer={toggleDrawer} isLoggedIn={isLoggedIn} />
      <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} iOS={iOS} classes={classes} />
      <Container>{children}</Container>

      <Footer />
    </>
  )
}
