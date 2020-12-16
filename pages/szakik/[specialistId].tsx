import React from 'react'
import { useRouter } from 'next/router'
import specialists from '../../tempSzaki.json'
import Layout from 'containers/Layout/Layout'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'

import ProfilePicture from 'components/ProfilePicture/ProfilePicture'
import { Specialist } from 'types/specialist'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
    },
    card: {
      background: theme.palette.background.default,
      margin: theme.spacing(2),
    },
    chip: {
      margin: theme.spacing(1),
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: theme.spacing(1),
    },
  })
)

function SzakiProfil() {
  const classes = useStyles()
  const router = useRouter()
  const { specialistId } = router.query
  const currentSpecialist = Object.assign(
    {},
    ...specialists.filter((specialist) => specialist.id === Number(specialistId))
  ) as Specialist

  if (!currentSpecialist) {
    return null
  }
  return (
    <Layout>
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container>
                <Grid item>
                  <ProfilePicture
                    name={currentSpecialist.name}
                    src={currentSpecialist.profile_picture}
                    classes={classes}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{currentSpecialist.name}</Typography>
                  <Button variant="outlined" color="primary">
                    {currentSpecialist.phone_number}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Grid container direction="row" alignItems="center">
                    <LocationOnOutlinedIcon />

                    <Typography variant="h6">
                      {currentSpecialist.location}, {currentSpecialist.region}
                    </Typography>
                  </Grid>
                  <Grid container alignItems="center">
                    <LocalShippingIcon />
                    <Typography variant="h6">
                      Kiszállási díj: {currentSpecialist.drop_off_fee} Ft
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr />
          <Grid container>
            <Grid item>{currentSpecialist.description}</Grid>
          </Grid>

          <Grid container>
            <Grid item>
              {currentSpecialist.professions?.map((profession) => (
                <Chip
                  key={profession.id}
                  icon={<WorkOutlineOutlinedIcon />}
                  label={profession.name}
                  className={classes.chip}
                />
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default SzakiProfil
