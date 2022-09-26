import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/features/products/productSlice';


const ProductList = () => {
  const sel = useSelector(state => state.products.data)
  const dispatch = useDispatch()

  useEffect(() => {
    if(sel.length === 0){
      dispatch(fetchProducts())
    }
  }, [])

  return (
    <Box padding='35px' w='100%' height='100%'>
      <Box marginBottom='10px' display='flex' alignItems='center' gap='60px'  >
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
          <Link to={'/products/add'} style={{ textDecoration: 'none' }} >
            <Button variant="contained" fullWidth sx={{ textDecoration: 'none', color: '#fff', background: '#1B1C1E', fontSize: '16px', height: '50px', width: '150px' }}>Add Product</Button>
          </Link>
        </Box>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='10px' width='100%' height='100%' alignItems='start' overflow='auto'>
        {
          sel.map((i) => <Card style={{ width: '265px', borderRadius: '10px', padding: '15px', border: '1px solid #E4E7EE', display: 'flex', flexDirection: 'column', height:"570px" }}>
            <img src={i.media?.pictures} width={'100%'} height={'500px'} alt="" />
            <Box w='100%' height='100%' display='flex' flexDirection='column'>
              <Box display='flex' alignItems='center' gap='10px' >
                <Typography fontSize='22px' fontWeight='600' color='#000' lineHeight='30px'>{i.price}$</Typography>
                <Typography fontSize='18px' fontWeight='300' color='#B7B8C5' lineHeight='25px' style={{ textDecoration: 'line-through' }}>255$</Typography>
              </Box>
              <Typography marginTop='16px' style={{ fontSize: '18px', fontWeight: '400', lineHeight: '25px', color: '#090F24' }}>
                {i.title}
              </Typography>
              <Box marginTop='16px' w='100%' height='30px' display='flex' justifyContent='space-between' flexDirection='row'>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#F39999' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#090F24' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#69CB87' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#9C7C75' }}></Box>
                <Box style={{ cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', background: '#A2D0DA' }}></Box>
              </Box>
              <Box marginTop='16px' sx={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <Button style={{ cursor: 'pointer', width: '100%' }} variant="contained" color="error" leftIcon={<DeleteIcon />}>Delete</Button>
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
