import React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack 
    direction="row"
    alignItems="center" 
    p={2} 
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45} style={{ marginRight: '20px' }}/>
      <Typography fontSize="35px" color="#c9b6e7" className="vektra">
        Hypnodrome
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar;