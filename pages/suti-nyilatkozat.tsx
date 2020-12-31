import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  createStyles,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import AdBanner from 'components/AdBanner/AdBanner'
import Layout from 'containers/Layout/Layout'
import useScript from 'hooks/useScript'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  })
)

const SutiNyilatkozat = () => {
  const classes = useStyles()
  const status = useScript('//report.cookie-script.com/r/06a7fcd9e752a69787f543a4894c5a78.js')

  console.log(status)

  return (
    <Layout>
      <AdBanner />
      <br />
      <Card className={classes.card}>
        <CardHeader title="Süti nyilatkozat" />
        <CardContent>
          <Typography variant="h6">Bevezetés</Typography>
          <Typography>
            Ahhoz, hogy ez a weboldal megfelelően működjön, és hogy az oldal látogatói számára az
            őket leginkább érdeklő termékeket kínálhassuk, az Ön eszközén apró adatfájlokat,
            úgynevezett „sütiket“ (cookie) helyezünk el. Jelen szabályzat ezekről a sütikről nyújt
            tájékoztatást, illetve szabályozásukról e weboldal kapcsán.
          </Typography>
          <br />
          <Typography>
            A süti egy kis szöveges fájl, amelyet egy weboldal ment el az Ön számítógépén vagy
            mobileszközén, amikor Ön az adott oldalt felkeresi. A sütiket az eszköz ezután minden
            alkalommal visszaküldi az eredeti weboldalnak, amikor Ön azt felkeresi, vagy egy másik
            weboldalnak, amelyik az adott sütit felismeri, hogy annak segítségével tartsák nyilván a
            felhasználó online tevékenységét. A jelen oldalon található sütik lehetnek első fél (a
            DLL weboldal) által elhelyezett sütik, illetve egy harmadik fél (egy másik weboldal)
            által elhelyezett sütik, valamint sor kerülhet még ezek elhelyezésére az Ön által tőlünk
            kapott e-mailek kapcsán is. A sütik segítenek nekünk abban, hogy javítsuk az Ön
            felhasználói élményét, amikor felkeresi weboldalunkat. Annak megértésében is segítenek,
            hogy a látogatók miként használják weboldalunkat, például mely oldalak a
            legnépszerűbbek, hogy így jobban ki tudjuk szolgálni weboldalunk felhasználóinak
            igényeit.
          </Typography>
          <br />
          <Typography variant="h6">A jelene weboldalon alkalmazott sütik</Typography>
          <Typography variant="h6">Szigorúan szükséges</Typography>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox name="needed" checked={true} disabled />}
              label="Szigorúan szükséges"
            />
            <FormControlLabel
              control={<Checkbox name="performance" checked={true} />}
              label="Teljesítmény"
            />
            <FormControlLabel control={<Checkbox name="aim" checked={true} />} label="Célzó" />
            <Button variant="contained" color="primary">
              Mentés
            </Button>
          </FormGroup>
          <Typography>Szigorúan szükséges</Typography>
          <div>
            <div>
              Script status: <b>{status}</b>
            </div>
            {status === 'ready' && (
              <script
                type="text/javascript"
                data-cookiescriptreport="report"
                src="//report.cookie-script.com/r/06a7fcd9e752a69787f543a4894c5a78.js"
              ></script>
            )}
          </div>

          <br />
          <Typography variant="h6">Harmadik fél weboldalain található sütik</Typography>
          <Typography>
            A harmadik fél sütiket valaki más helyezi el, nem a weboldal tulajdonosa, olyan
            célokból, mint információgyűjtés a felhasználói magatartásról, demográfiai adatokról
            vagy személyre szabott marketingről. Weboldalunk használatakor előfordulhat, hogy
            beágyazott tartalommal találkozik, vagy hogy egy oldal átirányítja más weboldalakra
            például felmérésekhez, különféle portálokra vagy álláshirdetésekre. Ezek a weboldalak és
            beágyazott tartalmak saját sütiket is használhatnak. Azzal nem tudunk semmit tenni, ha
            más weboldalak helyeznek el sütiket, még akkor sem, ha Ön a mi weboldalunkról került
            oda.
          </Typography>
          <br />
          <Typography variant="h6">A múltban elhelyezett sütik</Typography>

          <Typography>
            Adatainak analitikai sütijeink segítségével történő gyűjtése törölhető. Ha a sütiket
            törli, a beállítások megváltoztatása előtt gyűjtött információk még mindig
            felhasználhatók, azonban a kikapcsolt sütivel már nem gyűjtünk további információkat az
            Ön felhasználói élménye kapcsán. Marketing sütijeink esetében, amikor egy felhasználó
            kikapcsolja a követést, egy új süti kerül elhelyezésre, ami megakadályozza a felhasználó
            követését.
          </Typography>
        </CardContent>
      </Card>
    </Layout>
  )
}

export default SutiNyilatkozat
