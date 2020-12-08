import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import GoogleMapComponent from 'components/GoogleMapComponent/GoogleMapComponent';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';

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
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#444444',
    },
  })
);

// Miskolc, Csemetekert utca 2
const containerStyle = {
  width: '400px',
  height: '400px',
};
const center = {
  lat: 48.074686,
  lng: 20.767363,
};

const kapcsolat = () => {
  const [name, setName] = useState('');
  const classes = useStyles();

  return (
    <Layout>
      <GoogleMapComponent containerStyle={containerStyle} center={center} />
      <Typography variant='h5'>Kapcsolatfelvétel</Typography>
      <Grid container>
        <Grid item sm={12} md={6} lg={6}>
          <List className={classes.root}>
            <ListItem>
              <ListItemIcon>
                <RoomIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.root}
                primary='CÍM'
                secondary={
                  '3508, Csemetekert utca 2 - Miskolc, Borsod-Abaúj-Zemplén'
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.root}
                primary='EMAIL'
                secondary={
                  <>
                    <span>
                      Üzleti kapcsolattartó: bajusz.mate@mestertkeresek.hu
                    </span>
                    <br />
                    <span>
                      Ügyfél szolgálat: ugyfelszolgalat@mestertkeresek.hu
                    </span>
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FeaturedVideoIcon />
              </ListItemIcon>
              <ListItemText
                className={classes.root}
                primary='REKLÁMOK'
                secondary={
                  <>
                    <span>
                      Reklámok megjelentetésével kapcsolatos kérdések,
                    </span>
                    <br />
                    <span>ajánlat kérés: sales@mestertkeresek.hu</span>
                  </>
                }
              />
            </ListItem>
          </List>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <ValidatorForm onSubmit={() => null}>
            <div>
              <TextValidator
                label='name'
                /* onChange={handleChange} */
                name='name'
                value={name}
                validators={['required', 'isString']}
                errorMessages={['A mezö kötelezö', 'Nem valós név']}
                variant='outlined'
              />

              <TextValidator
                label='Email'
                /* onChange={handleChange} */
                name='email'
                value={name}
                validators={['required', 'isEmail']}
                errorMessages={['A mezö kötelezö', 'Nem valós email cím']}
                variant='outlined'
              />
            </div>
            <div>
              <TextValidator
                label='Email'
                /* onChange={handleChange} */
                name='email'
                value={name}
                validators={['required', 'isEmail']}
                errorMessages={['A mezö kötelezö', 'Nem valós email cím']}
                variant='outlined'
              />
            </div>

            <Button type='submit' color='primary'>
              Küldés
            </Button>
          </ValidatorForm>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default kapcsolat;
