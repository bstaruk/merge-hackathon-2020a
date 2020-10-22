import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import logo from '../LoginPage/logo.png';

function PageFooter() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Box>
        <img src={logo} alt="ReX" style={{ maxHeight: '3.5rem' }} />
      </Box>

      <Box mt={2}>
        <Typography color="textSecondary" variant="body2">
          crafted by Alyssa, Becky, George &amp; Brian
        </Typography>
      </Box>
    </Box>
  );
}

export default PageFooter;
