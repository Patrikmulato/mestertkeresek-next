import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import { LinkedIn } from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  return (
    <>
      <hr color='#393939' />
      <Box color='text.secondary' bgcolor='background.paper'>
        <Grid
          container
          spacing={3}
          direction='row'
          justify='space-around'
          alignItems='flex-start'
        >
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <List>
              <ListItem>
                <img
                  src={require('public/static/images/logo_large.png')}
                  alt='Mestertkeresek.hu'
                  style={{ width: '100%', height: 'auto' }}
                />
              </ListItem>
              <ListItem>
                <img
                  src={require('public/static/images/barion-card-strip-intl.svg')}
                  alt='barion strip'
                  style={{ width: '100%', height: 'auto' }}
                />
              </ListItem>
              <ListItem>
                Nem kell végigkérdezni az összes ismerősöd, hogy ismernek e jó
                szakit/mestert aki tud neked segíteni. Velünk könnyedén
                megtalálod a legjobb szakembert.
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography variant='h6'>Gyors Linkek</Typography>

            <List>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  Rólunk
                </Link>
              </ListItem>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  Adatvédelem
                </Link>
              </ListItem>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  GYIK
                </Link>
              </ListItem>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  Kapcsolat
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography variant='h6'>Legnépszerűbb mesterségek</Typography>

            <List>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  Villanyszerelő
                </Link>
              </ListItem>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  Vízvezetékszerelő
                </Link>
              </ListItem>
              <ListItem>
                <Link href='#' color='inherit' underline='none'>
                  Kőműves
                </Link>
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <Typography variant='h6'>Kövess minket!</Typography>

            <List>
              <ListItem>
                <Link href='https://www.facebook.com/mestertkeresek.hu'>
                  <Facebook fontSize='large' />
                </Link>
                <Link href='https://www.linkedin.com/company/mestertkeresek-hu'>
                  <LinkedIn fontSize='large' />
                </Link>
              </ListItem>
              <ListItem>
                Egyedi ajánlatokért és akciókhoz iratkozz fel hírlevelünkre!
              </ListItem>
              <ListItem>
                <ValidatorForm onSubmit={() => null}>
                  <TextValidator
                    label='Email'
                    onChange={handleChange}
                    name='email'
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['A mezö kötelezö', 'Nem valós email cím']}
                  />
                  <Button type='submit' color='primary'>
                    Küldés
                  </Button>
                </ValidatorForm>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <hr color='#393939' />
        <br />
        <Typography align='center'>
          Minden jog fenntartva © 2020 - Mestertkeresek.hu
        </Typography>
        <br />
      </Box>
    </>
  );
}
