import Layout from 'containers/Layout/Layout'
import React from 'react'
import Image from 'next/image'
import { Box, Grid, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import VisibilityIcon from '@material-ui/icons/Visibility'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import PostAddIcon from '@material-ui/icons/PostAdd'

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
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <SearchIcon />
          </Grid>
          <Typography variant="h6">SZAKEMBER KERESÉS, HELY ALAPJÁN</Typography>
          <Typography>
            Válogass kedvedre a szakemberek közül. Ha sürgősen segítségre van szükséged fel is
            hívhatod őket, vagy feladhatsz egy ajánlatkérést és a szakemberek keresnek meg, vagy
            emailben értesítünk. A munka után oszd meg tapasztalataidat ismerőseiddel, segíts
            ismerőseidnek szakembert találni.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <VisibilityIcon />
          </Grid>
          <Typography variant="h6">MESTEREK LÁTHATÓSÁGA, REKLÁM</Typography>
          <Typography>
            A Mestertkeresek.hu mindent megtesz a vállalkozásod fejlesztése érdekében, az elérhető
            szolgáltatásaink alapján. Google és Facebook reklámokkal segítünk a mestereknek, illetve
            rengeteg facebook alvállalkozói vagy szakember kereső csoportba aktívak vagyunk.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <ShowChartIcon />
          </Grid>
          <Typography variant="h6">PÉNZT HOZUNK NEKED</Typography>
          <Typography>
            Ha mesterként regisztrálsz itt hamar kialakulhat a fix ügyfélköröd, a szolgáltatás
            megvásárlása után elérhető vagy az oldalon, és egyéni facebook hirdetéseinkkel pár hónap
            alatt tucatnyi új vevőt szerezhetsz.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <EmojiEmotionsIcon />
          </Grid>
          <Typography variant="h6">NINCS KÖZVETÍTÉS ÉS FIZETŐS AJÁNLATKÉRÉS</Typography>
          <Typography>
            Nálunk nem kell fizetni ajánlatkérés megtekintésért, illetve nem számolunk fel
            közvetítési díjat. A szolgáltatás csomag megvásárlásával minden funkciót megkapsz.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <PhoneInTalkIcon />
          </Grid>
          <Typography variant="h6">EGYÉNI ELÉRHETŐSÉG TELEFONON</Typography>
          <Typography>
            Senki se szereti ha késő este hívják, vagy amikor más elfoglaltága van. Nálunk
            beállíthatod hogy a hét napjain mikor tudnak hívni az emberek, egyébként csak
            visszahívást tudnak kérni.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <PostAddIcon />
          </Grid>
          <Typography variant="h6">MUNKA/AJÁNLATKÉRÉS FELADÁS</Typography>
          <Typography>
            Ha nem sürgősen kell neked szakember, létrehozhatsz egy ajánlatkérést és a mesterek
            keresnek meg téged!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Rolunk
