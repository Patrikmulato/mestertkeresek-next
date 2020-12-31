import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import Layout from 'containers/Layout/Layout'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AdBanner from 'components/AdBanner/AdBanner'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionHeader: {
      background: theme.palette.primary.main,
    },
    accordionBody: {
      background: theme.palette.background.default,
    },
  })
)

// To make more accordions just copy it and increment the id number
const Gyik = () => {
  const classes = useStyles()

  return (
    <Layout>
      <AdBanner />
      <Grid container>
        <Typography variant="h4">Gyakran ismételt kérdések</Typography>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h6">Mestereknek</Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className={classes.accordionHeader}
            >
              <Typography color="textSecondary">Hogyan regisztrálhatok az oldalon?</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionBody}>
              <Typography>
                A regisztráció teljesen ingyenes és a jobb felső sarokban található „BELÉPÉS” gombra
                kattintva tudsz: <br /> Csupán 1 percet vesz igénybe.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h6">Megrendelők, Ajánlatkérőknek</Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
              aria-controls="panel1b-content"
              id="panel1b-header"
              className={classes.accordionHeader}
            >
              <Typography color="textSecondary">
                Mit tegyek ha nem látom a mester telefonszámát?
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionBody}>
              <Typography>
                A mester telefonszámát csak az általa beállított időtartományban láthatod. Ők is
                emberek, nem mindig szeretik, ha zavarják őket. Javasoljuk hogy kérjen visszahívást,
                vagy hozzon létre egy ajánlatkérést.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Gyik
