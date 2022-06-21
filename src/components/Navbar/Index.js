import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useContext } from "react";
import { ThemeContext } from "../../context/index";
import { MyButtonNav, MyNavbar, MyTypography } from "./Styled";
import Switch from "../Switch/index";
import { Link } from "react-router-dom";

const pages = ["Matérias", "Alunos", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { themeSelected, setThemeSelected } = useContext(ThemeContext);

  const changeTheme = () => {
    if (themeSelected === "light") {
      setThemeSelected("dark");
    } else {
      setThemeSelected("light");
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <MyNavbar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalLibraryIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LEARNS
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <MyTypography textAlign="center">{page}</MyTypography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalLibraryIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <MyTypography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LEARNING
          </MyTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/materias" style={{ textDecoration: "none" }}>
              <MyButtonNav
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Subject
              </MyButtonNav>
            </Link>
            <Link to="/alunos" style={{ textDecoration: "none" }}>
              <MyButtonNav
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Student
              </MyButtonNav>
            </Link>
            <MyButtonNav
              href="http://serratec.org/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Blog
            </MyButtonNav>
          </Box>
          <Switch color='inherit' onClick={changeTheme} />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp" 
                  src="data:image/jpeg;base64,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"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MyNavbar>
  );
};

export default Navbar;