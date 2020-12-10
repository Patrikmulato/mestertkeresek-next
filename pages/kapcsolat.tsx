import React from 'react'
import Layout from 'containers/Layout/Layout'
import GoogleMapComponent from 'components/GoogleMapComponent/GoogleMapComponent'
import RoomIcon from '@material-ui/icons/Room'
import EmailIcon from '@material-ui/icons/Email'
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo'
import { Form } from 'react-final-form'
import { TextField, makeValidate } from 'mui-rff'
import * as Yup from 'yup'

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  Theme,
  Typography,
  makeStyles,
  Button,
  FormControl,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    button: {
      margin: theme.spacing(1),
    },
    contactText: {
      margin: theme.spacing(2),
    },
  })
)

// Miskolc, Csemetekert utca 2
const containerStyle = {
  width: '100%',
  height: '400px',
}
const center = {
  lat: 48.074686,
  lng: 20.767363,
}

const Kapcsolat = () => {
  const classes = useStyles()

  // We define our schema based on the same keys as our form:
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    subject: Yup.string().required(),
    message: Yup.string().required(),
  })

  // Run the makeValidate function...
  const validate = makeValidate(schema)

  async function onSubmit(values: FormData) {
    makeValidate(schema)
    console.log(values)
  }

  return (
    <Layout>
      <GoogleMapComponent containerStyle={containerStyle} center={center} />
      <Typography variant="h5" className={classes.contactText}>
        Kapcsolatfelvétel
      </Typography>
      <hr />
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <List>
            <ListItem>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText
                primary="CÍM"
                secondary={'3508, Csemetekert utca 2 - Miskolc, Borsod-Abaúj-Zemplén'}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="EMAIL"
                secondary={
                  <>
                    <span>Üzleti kapcsolattartó: bajusz.mate@mestertkeresek.hu</span>
                    <br />
                    <span>Ügyfél szolgálat: ugyfelszolgalat@mestertkeresek.hu</span>
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FeaturedVideoIcon />
              </ListItemIcon>
              <ListItemText
                primary="REKLÁMOK"
                secondary={
                  <>
                    <span>Reklámok megjelentetésével kapcsolatos kérdések,</span>
                    <br />
                    <span>ajánlat kérés: sales@mestertkeresek.hu</span>
                  </>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className={classes.root} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      placeholder="Kovács János"
                      label="Teljes Név"
                      name="name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <TextField
                      placeholder="email@email.com"
                      label="Email"
                      name="email"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>

                <FormControl fullWidth>
                  <TextField
                    placeholder="Tárgy"
                    label="Tárgy"
                    name="subject"
                    variant="outlined"
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    placeholder="Kedves Mestertkeresek.hu,"
                    label="Üzenet"
                    name="message"
                    variant="outlined"
                    rows="4"
                    multiline
                    required
                  />
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Küldés
                </Button>
              </form>
            )}
          />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Kapcsolat
