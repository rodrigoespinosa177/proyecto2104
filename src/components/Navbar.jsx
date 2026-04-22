import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const pages = [ //creamos un array para recorrer las paginas 
  { label: 'Home', path: '/' }, //con el path podemos acceder a las rutas que se navegan cuando hacemos click
  { label: 'Listas de personas', path: '/listas' },
  { label: 'Listas de tareas', path: '/tarea' },
];

function ResponsiveAppBar() {
  const navigate = useNavigate(); //inicializamos el hook de la navegacion, que nos permite redirigirnos a otra pagina
  const [anchorElNav, setAnchorElNav] = React.useState(null); //guardamos el elemento del dom donde se ancla el menu mobile

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Container maxWidth={false} sx={{ px: 4 }}>
        <Toolbar disableGutters>

          {/* DESKTOP - logo e ícono */}
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="navbar-logo"
            sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}
          >
            PROYECTO
          </Typography>

          {/* MOBILE - menú hamburguesa */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': { backgroundColor: '#1a1a1a' }
              }}
            >
              {pages.map((page) => ( //recorremos el array y crea un menu item por cada uno, y al hacer click navega a la ruta y cierra el menu
                <MenuItem
                  key={page.label}
                  className="navbar-menu-item"
                  onClick={() => { navigate(page.path); handleCloseNavMenu(); }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* MOBILE - logo e ícono */}
     
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className="navbar-logo"
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}
          >
            PROYECTO
          </Typography>

          {/* DESKTOP - botones de navegación */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                className="navbar-button"
                onClick={() => navigate(page.path)}
                sx={{ my: 2, display: 'block', px: 2 }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;