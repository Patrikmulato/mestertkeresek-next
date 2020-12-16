import React from 'react'
import Link from 'next/link'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import { Button, Card, CardActions, CardContent, Chip, Grid, Typography } from '@material-ui/core'
import { Specialist } from '../../types/specialist'

interface SpecialistCardInterface {
  classes: Record<'root' | 'card' | 'chip' | 'profileButton', string>
  specialist: Specialist
}

const SpecialistCard: React.FC<SpecialistCardInterface> = ({ classes, specialist }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="h6">{specialist.name}</Typography>
          </Grid>

          <Grid item>
            {specialist.callable ? (
              <Button variant="outlined" color="primary">
                {specialist.phone_number}
              </Button>
            ) : (
              <Button variant="outlined" color="primary">
                Visszahívás kérése
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <LocationOnOutlinedIcon />
          <Typography variant="body2">
            {specialist.region}, {specialist.location}
          </Typography>
        </Grid>

        <Typography variant="body2">{specialist.description}</Typography>
        <hr />
        <CardActions>
          <Grid container alignItems="flex-start">
            <Grid item lg={9} md={9} sm={12} xs={12}>
              {specialist.professions.map((profession) => (
                <Chip
                  key={profession.id}
                  icon={<WorkOutlineOutlinedIcon />}
                  label={profession.name}
                  className={classes.chip}
                />
              ))}
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12} container justify="flex-end">
              <Link href={`/szakik/${specialist.id}`}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.profileButton}
                >
                  Profil
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default SpecialistCard
