import Layout from 'containers/Layout/Layout'
import React from 'react'
import Image from 'next/image'
import { Box, Grid, Typography } from '@material-ui/core'

const Rolunk = () => {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Image
            src="/static/images/mestertkeresek-country.jpg"
            alt="Mestertkeresek.hu"
            width="2552"
            height="1573"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Typography variant="subtitle1">RÓLUNK</Typography>
          <hr />

          <Typography variant="body1">
            <Box fontWeight="fontWeightBold">
              A mestertkeresek.hu egy új internetes felület, amely összehozza a szolgáltatást nyújtó
              vállalkozót a szolgáltatást kereső felhasználóval a legrövidebb idő alatt úgy, hogy
              közben nincs olyan közvetítő aki ebből a kapcsolatból hasznot húz, miközben a legjobb
              szakemberek közül tudunk válogatni a legkedvezőbb feltételekkel.
            </Box>
          </Typography>
          <br />
          <Typography variant="body1">
            Legtöbbször ha szakembert keresünk azonnal szükségünk van rá, ezért nálunk ha elérhető
            egy szakember telefonon is azonnal felhívhatod. Tudjuk, hogy nem jövő héten fog
            eldugulni a csap, hanem most rögtön szükség van valakire.
          </Typography>
          <br />
          <Typography variant="body1">
            A mester regisztráció ingyenes, ha nincs elég munkád lépj most!
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid container justify="center">
        <Typography variant="h4">
          <Box fontWeight="fontWeightBold">Megbízható mesterek, bárhol bármikor</Box>
        </Typography>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}></Grid>
      </Grid>
    </Layout>
  )
}

export default Rolunk
