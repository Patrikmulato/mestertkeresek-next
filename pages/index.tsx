import { Button, createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import SpecialistCard from 'components/SpecialistCard/SpecialistCard'
import Layout from 'containers/Layout/Layout'
import specialists from '../tempSzaki.json'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
    card: {
      background: theme.palette.background.default,
      margin: theme.spacing(2),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
    profileButton: {
      marginTop: theme.spacing(0.5),
    },
  })
)

export default function Home() {
  const classes = useStyles()
  return (
    <Layout>
      <Grid
        container
        className={classes.root}
        justify="space-between"
        wrap="nowrap"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5">Kiemelt mesterek</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" size="small">
            Mester regisztráció
          </Button>
        </Grid>
      </Grid>
      {specialists.map((specialist) => (
        <SpecialistCard key={specialist.id} classes={classes} specialist={specialist} />
      ))}
    </Layout>
  )
}
/* //getServerSideProps -ot néztem még
export async function getStaticProps() {
  const res = await fetch(
    `http://mestertkeresek-staging-env.eu-central-1.elasticbeanstalk.com/api/kiemelt-szakik`
  )
  const specialists = await res.json()
  // console.log(data)
  if (!specialists) {
    return {
      notFound: true,
    }
  }
  return { props: { specialists } } // will be passed to the page component as props}
} */
