import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delProducts, fetchProducts, getAfter } from '../../store/features/products/productSlice';


const ProductList = () => {
  let sel = useSelector(state => state.products.data)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (sel.length === 0) {
      dispatch(fetchProducts())
    }
  }, [])

  const handleDel = (i) => {
    dispatch(delProducts(i.id))
  }
  let a = [...sel]
  const handleChange = (e) => {
    sel = a.filter((i) => i.title.toLowerCase().includes(value.toLowerCase()))
    a = [...sel]
    console.log(a);
    localStorage.setItem('arr', JSON.stringify(a))
  }
  let b = JSON.parse(localStorage.getItem('arr'))
  useEffect(() => {
    const link = document.querySelectorAll('#link')

    link.forEach((elem) => {
      elem.classList.remove('active')
    })
    link[2].classList.add('active')
  })
  return (
    <Box padding='35px' w='100%' height='100%'>
      <Box marginBottom='10px' display='flex' alignItems='center' gap='60px'  >
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Search"
          variant='outlined'
          onChange={(e) => {
            setValue(e.target.value)
            handleChange()
          }}
          value={value}

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
          <Link to={'/products/add'} style={{ textDecoration: 'none' }} >
            <Button variant="contained" fullWidth sx={{ textDecoration: 'none', color: '#fff', background: '#1B1C1E', fontSize: '16px', height: '50px', width: '150px' }}>Add Product</Button>
          </Link>
        </Box>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='10px' width='100%' height='100%' alignItems='start' overflow='auto'>
        {
          b.map((i) => <Card style={{ width: '265px', borderRadius: '10px', padding: '15px', border: '1px solid #E4E7EE', display: 'flex', flexDirection: 'column', height: "570px" }}>
            <img src={i.media?.pictures} width={'100%'} height={'500px'} alt="" />
            <Box display='flex' flexDirection='column'>
              <Box display='flex' alignItems='center' gap='10px' >
                <Typography fontSize='22px' fontWeight='600' color='#000' >{i.price}$</Typography>
                <Typography fontSize='22px' fontWeight='300' color='#B7B8C5' style={{ textDecoration: 'line-through' }}>255$</Typography>
              </Box>
              <Typography marginTop='16px' style={{ fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: '#090F24' }}>
                {i.title.slice(0, 90)}
              </Typography>
              <Box marginTop='16px' w='100%' height='30px' display='flex' justifyContent='space-between' flexDirection='row'>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#F39999' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#090F24' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#69CB87' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#9C7C75' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#A2D0DA' }}></Box>
              </Box>
              <Box marginTop='16px' sx={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <Button onClick={() => handleDel(i)} style={{ cursor: 'pointer', width: '100%' }} variant="contained" color="error" leftIcon={<DeleteIcon />}>Delete</Button>
                <Link style={{ width: '100%', textDecoration: 'none' }} to={`/products/edit/${i.id}`}>
                  <Button style={{ cursor: 'pointer', width: '100%' }} variant="contained" color="success" leftIcon={<EditIcon />} >
                    Edit
                  </Button>
                </Link>
              </Box>
            </Box>
          </Card>)
        }
      </Box>
    </Box>
  )
}

export default ProductList
