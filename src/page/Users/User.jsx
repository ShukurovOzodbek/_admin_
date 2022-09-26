import React, { useEffect, useState } from 'react'
import { TextField, Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

const User = () => {
  const line = {
    border: "1px solid #c4c4c4",
    width: "100%"
  }

  const def_a = {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    opacity: '0.65'
  }

  return (
    <Box padding='20px 20px' minHeight={`64vh`}>
      <Box display='flex' alignItems='center' gap='60px'  >
        <TextField
          size='549.47px'
          required
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Search"
          variant='outlined'

          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          sx={{
            display: 'flex',
            gap: '15px'
          }}
        />
        <Box display='flex' gap='30px'>
          <Button variant="contained" fullWidth sx={{ color: '#fff', background: '#1B1C1E', fontSize: '16px', height: '50px', width: '150px' }}>Search</Button>
          <Link to={'/users/add'} style={{textDecoration: 'none'}}>
            <Button variant="contained" fullWidth sx={{ textDecoration: 'none', color: '#fff', background: '#1B1C1E', fontSize: '16px', height: '50px', width: '150px' }}>Add User</Button>
          </Link>
        </Box>
      </Box>
      <Box>
        <Box id="user">
          <Box display='flex' justifyContent='space-around' marginTop='20px'>
            <Typography variant="span" textAlign='left' width='79px'>ID</Typography>
            <Typography variant="span" textAlign='left' width='92px'>Email</Typography>
            <Typography variant="span" textAlign='left' width='114px'>Name</Typography>
            <Typography variant="span" textAlign='left' width='36px'>Amount</Typography>
            <Typography variant="span" textAlign='center' width='164px'>Added Products Count</Typography>
            <Typography variant="span" textAlign='center' width='29px'></Typography>
          </Box>
          <div className='line' style={line}></div>
          {
            [1, 2, 3, 4].map(() => <Box display='flex' borderBottom={'1px solid #F2F2F2'} justifyContent='space-around' marginTop='20px'>
                <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' color="#0B63F8" sx={{ textDecoration: 'underline' }} textAlign='left' width='79px'>#AHGA68</Typography>
                <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='left' width='92px'>23/09/2022</Typography>
                <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='left' width='114px'>Jacob Marcus</Typography>
                <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='left' width='36px'>$100</Typography>
                <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='center' width='114px'>12</Typography>
                <Button>Edit</Button>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}

export default User
