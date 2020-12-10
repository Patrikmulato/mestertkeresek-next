import React, { useState } from 'react'
import {
  Box,
  Button,
  createStyles,
  Grid,
  Link,
  List,
  ListItem,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core'
import Image from 'next/image'
import { Form } from 'react-final-form'
import { TextField } from 'mui-rff'

import Facebook from '@material-ui/icons/Facebook'
import { LinkedIn } from '@material-ui/icons'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

  // yes, this can even be async!
  async function onSubmit(values: FormData) {
    console.log(values)
  }

  return (
    <>
      <hr color="#393939" />
      <Box color="#FFFF" bgcolor="background.paper">
        <Grid container spacing={3} direction="row" justify="space-around" alignItems="flex-start">
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <List>
              <ListItem>
                <Image
                  src="/static/images/logo_large.png"
                  alt="Mestertkeresek.hu"
                  width="1500"
                  height="226"
                />
              </ListItem>
              <ListItem>
                <Image
                  src="/static/images/barion-card-strip-intl.svg"
                  alt="barion strip"
                  width="11317"
                  height="1167"
                />
              </ListItem>
              <ListItem>
                Nem kell végigkérdezni az összes ismerősöd, hogy ismernek e jó szakit/mestert aki
                tud neked segíteni. Velünk könnyedén megtalálod a legjobb szakembert.
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography variant="h6">Gyors Linkek</Typography>

            <List>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  Rólunk
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  Adatvédelem
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  GYIK
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  Kapcsolat
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography variant="h6">Legnépszerűbb mesterségek</Typography>

            <List>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  Villanyszerelő
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  Vízvezetékszerelő
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#" color="inherit" underline="none">
                  Kőműves
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography variant="h6">Kövess minket!</Typography>

            <List>
              <ListItem>
                <Link href="https://www.facebook.com/mestertkeresek.hu">
                  <Facebook fontSize="large" />
                </Link>
                <Link href="https://www.linkedin.com/company/mestertkeresek-hu">
                  <LinkedIn fontSize="large" />
                </Link>
              </ListItem>
              <ListItem>Egyedi ajánlatokért és akciókhoz iratkozz fel hírlevelünkre!</ListItem>
              <ListItem>
                <Form
                  onSubmit={onSubmit}
                  /* initialValues={initialValues}
                  validate={validate} */
                  render={({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                      <TextField
                        label="A te emailed"
                        name="newsLetter"
                        variant="outlined"
                        required
                      />
                      <Button variant="contained" color="primary">
                        Küldés
                      </Button>
                    </form>
                  )}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <hr color="#393939" />
        <br />
        <Typography align="center">Minden jog fenntartva © 2020 - Mestertkeresek.hu</Typography>
        <br />
      </Box>
    </>
  )
}

export default Footer
