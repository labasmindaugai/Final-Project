import * as React from 'react';
import {
  AppBar, Toolbar,
} from '@mui/material';
import Desktop from './desktop';

const breakpoint = 'sm';

const Navbar = ({ handleMoveSection }) => {
  const [setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      style={{ background: 'none' }}
      elevation={0}
      position="absolute"
    >
      <Toolbar disableGutters>
        <Desktop
          handleMoveSection={(page) => handleMoveSection(page)}
          handleCloseNavMenu={handleCloseNavMenu}
          breakpoint={breakpoint}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
