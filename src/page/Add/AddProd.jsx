import { Box, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducts } from '../../store/features/products/productSlice';

const AddProd = () => {
  let [name, setName] = useState('')
  let [price, setPrice] = useState('')
  let [title, setTitle] = useState('')
  let [discount, setDiscount] = useState('')
  let [colors, setColors] = useState('')
  let [category, setCategory] = useState('')
  let [description, setDescription] = useState('')
  let [brand, setBrand] = useState('')
  let [year, setYear] = useState('')
  let [size, setSize] = useState('')
  let [picture, setPicture] = useState('')
  let [video, setVideo] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let obj = {
      id: Math.random(),
      name,
      category,
      price,
      title,
      description,
      discount: {
        isSale: false,
        percent: 20
      },
      company: {
        brand,
        icon: "",
        year
      },
      rate: 0,
      size: size.split(' '),
      colors: colors.split(' '),
      media: {
        pictures: picture.split(' '),
        video: video.split(' ')
      },
      qt: 10
    }

    dispatch(addProducts(obj))
    window.location.reload()
    setTimeout(() => {
      alert('Your product added succesfully')
    }, 1000)
  }
  return (
    <Box width='100%' display={'flex'} marginTop='60px' padding='24px' fontFamily='cursive'>
      <h1 style={{ marginBottom: '80px', transform: 'translate(500px, -40px)' }}>Add Product</h1>
      <form style={{ width: '70%', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <Box display='flex' justifyContent='center' gap='40px' width={'100%'}>
          <Box width='50%' display='flex' flexDirection='column' gap="10px">
            <TextField onChange={(e) => setName(e.target.value)} value={name} sx={{ width: '100%' }} label="Name" variant="standard" />
            <TextField onChange={(e) => setPrice(e.target.value)} value={price} sx={{ width: '100%' }} label="Price" variant="standard" />
            <TextField onChange={(e) => setTitle(e.target.value)} value={title} sx={{ width: '100%' }} label="Title" variant="standard" />
            <TextField onChange={(e) => setDiscount(e.target.value)} value={discount} sx={{ width: '100%' }} label="Discount (percent)" variant="standard" />
            <TextField onChange={(e) => setColors(e.target.value)} value={colors} sx={{ width: '100%' }} label="Colors (ex: red, green, yellow)" variant="standard" />
            <TextField onChange={(e) => setVideo(e.target.value)} value={video} sx={{ width: '100%' }} label="Video" variant="standard" />
          </Box>
          <Box width='50%' display='flex' flexDirection='column' gap="10px">
            <TextField onChange={(e) => setCategory(e.target.value)} value={category} sx={{ width: '100%' }} label="Category" variant="standard" />
            <TextField onChange={(e) => setDescription(e.target.value)} value={description} sx={{ width: '100%' }} label="Description" variant="standard" />
            <TextField onChange={(e) => setBrand(e.target.value)} value={brand} sx={{ width: '100%' }} label="Brand Name" variant="standard" />
            <TextField onChange={(e) => setYear(e.target.value)} value={year} sx={{ width: '100%' }} label="Year" variant="standard" />
            <TextField onChange={(e) => setSize(e.target.value)} value={size} sx={{ width: '100%' }} label="Size (ex: 144x144, 100x100, 120x120)" variant="standard" />
            <TextField onChange={(e) => setPicture(e.target.value)} value={picture} sx={{ width: '100%' }} label="Picture" variant="standard" />
          </Box>
        </Box>
        <Button type='submit' variant='contained' sx={{ marginTop: '30px !important', width: '450px', height: '40px', margin: '0px auto', bgcolor: '#279574', color: 'white' }}>
          Add Product
        </Button>
      </form>
    </Box>
  )
}

export default AddProd
