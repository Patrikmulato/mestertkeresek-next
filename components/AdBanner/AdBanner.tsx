import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    banner: {
      width: '100%',
      height: '150px',
      background: theme.palette.primary.main,
    },
    dashedBox: {
      border: '3px dashed black',
      width: '80%',
      height: '100px',
      background: theme.palette.primary.main,
    },
  })
)

const AdBanner = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.banner} justify="center" alignItems="center">
      <Grid container className={classes.dashedBox} justify="center" alignItems="center">
        <Typography variant="h5" color="textSecondary">
          Bérelhető reklámfelület
        </Typography>
      </Grid>
    </Grid>
  )
}

export default AdBanner
