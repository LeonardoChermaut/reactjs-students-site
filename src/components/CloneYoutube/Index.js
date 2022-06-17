import React from "react";
import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  Switch,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import AddCircle from "@material-ui/icons/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

// EXERCÍCIO DEMO CLONE YOUTUBE
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: "uppercase",
  },
}));
const videos = [
  {
    id: 1,
    title: "AMAZING PLACE | Camping, rewiew and VLOG #29",
    channel: "Casting Camping",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb1.PNG",
  },
  {
    id: 2,
    title: "Teresópolis | Capital Nacional do montanhismo no Brasil",
    channel: "Parque Nacional Serra dos Orgãos",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb2.jpg",
  },
  {
    id: 3,
    title: "Camping under the Northern Lights | Hunting the Aurora",
    channel: "Aurora",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb3.jpg",
  },
  {
    id: 4,
    title: "NEBULA | The beautifull night in outdoor",
    channel: "Mountain Spirit",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb4.jpg",
  },
  {
    id: 5,
    title: "MELHORES CAMPINGS NO BRASIL | Vlog #26",
    channel: "Casting",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb5.png",
  },
  {
    id: 6,
    title: "COMO MIGRAR | Dicas e Truques #01",
    channel: "Mountain Soul",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb6.png",
  },
  {
    id: 7,
    title: "BEST SLACKLINE TRICKS | Brazil ",
    channel: "Slack Master",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb7.jpg",
  },
  {
    id: 8,
    title: "TRAVESSIA | Highline com o amanhecer no Brasil",
    channel: "AdventureMountain",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "/images/thumb8.jpg",
  },
];
function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={
              theme.palette.type === "dark"
                ? "/images/branco.png"
                : "/images/preto.png"
            }
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVertIcon />
          </IconButton>
          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Início"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Em alta"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Inscrições"}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Biblioteca"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Histórico"}
                  />
                </ListItem>
              </List>
              <Divider />
              <Box p={7}>
                <Typography variant="body2">
                  Faça login para curtur vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Música"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Esportes"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Jogos"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Filmes"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Notícias"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Ao vivo"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Destaques"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Videos 360"}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Procurar mais"}
                />
              </ListItem>
              <Divider />
            </div>
          </Drawer>
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>

          <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
export default Home;
