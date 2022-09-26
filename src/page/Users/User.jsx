import React, { useEffect, useState } from 'react'
import { TextField, Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../store/features/users/userSlice';

const User = () => {
  const [value, setValue] = useState('')
  const line = {
    border: "1px solid #c4c4c4",
    width: "100%"
  }
  let names = useSelector(state => state.users.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if (names.length === 0) {
      dispatch(fetchUsers())
    }
  }, [])
  useEffect(() => {
    const link = document.querySelectorAll('#link')

    link.forEach((elem) => {
      elem.classList.remove('active')
    })
    link[1].classList.add('active')
  })
  const def_a = {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    opacity: '0.65'
  }
  let a = [...names]
  const handleChange = (e) => {
    if (value === '') {
      localStorage.setItem('arrUser', JSON.stringify(names))
    } else {
      names = a.filter((i) => i.name.toLowerCase().includes(value.toLowerCase()))
      localStorage.setItem('arrUser', JSON.stringify(names))
    }
  }
  let b = JSON.parse(localStorage.getItem('arrUser'))
  return (
    <Box padding='20px 20px' minHeight={`64vh`}>
      <Box display='flex' alignItems='center' gap='60px'  >
        <TextField
          size='549.47px'
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Search"
          variant='outlined'
          onChange={(e) => {
            handleChange()
            setValue(e.target.value)
          }}

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
          <Link to={'/users/add'} style={{ textDecoration: 'none' }}>
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
            b.map(({ name, surname, id, amount, prCount }) => <Box display='flex' borderBottom={'1px solid #F2F2F2'} justifyContent='space-around' marginTop='20px'>
              <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' color="#0B63F8" sx={{ textDecoration: 'underline' }} textAlign='left' width='79px'>#{id}</Typography>
              <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='left' width='96px'>23/09/2022</Typography>
              <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='left' width='134px'>{name} {surname}</Typography>
              <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='left' width='36px'>${amount}</Typography>
              <Typography variant="span" fontWeight='400' fontSize='16px' lineHeight='24px' sx={{ opacity: '0.65' }} textAlign='center' width='114px'>{prCount}</Typography>
              <Link style={{ textDecoration: 'none' }} to={`/users/edit/${id}`}><Button sx={{ background: 'black' }} variant={"contained"}>Edit</Button></Link>
            </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  )
}

export default User
