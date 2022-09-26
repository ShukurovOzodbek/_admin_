import { Box, Button } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const AddProd = () => {
  let [name, setName] = useState('')
  let [prise, setPrise] = useState('')
  let [title, setTitle] = useState('')
  let [discount, setDiscount] = useState('')
  let [colors, setColors] = useState('')
  let [category, setCategory] = useState('')
  let [description, setDescription] = useState('')
  let [brand, setBrand] = useState('')
  let [year, setYear] = useState('')
  let [size, setSize] = useState('')

  let handleSubmit = (e) => {
    e.preventDefault()
    console.log(name);
    console.log(prise);
    console.log(title);
    console.log(discount);
    console.log(colors);
    console.log(category);
    console.log(description);
    console.log(brand);
    console.log(year);
    console.log(size);
  }
  return (
    <Box width='100%' display={'flex'} marginTop='60px' padding='24px' fontFamily='cursive'>
      <h1 style={{ marginBottom: '80px', transform: 'translate(500px, -40px)' }}>Add Product</h1>
      <form style={{ width: '70%', display: 'flex', flexDirection: 'column' }} onSubmit={(e) => handleSubmit(e)}>
        <Box display='flex' justifyContent='center' gap='40px' width={'100%'}>
          <Box width='50%' display='flex' flexDirection='column' gap="10px">
            <TextField onChange={(e) => setName(e.target.value)} sx={{ width: '100%' }} label="Name" variant="standard" />
            <TextField onChange={(e) => setPrise(e.target.value)} sx={{ width: '100%' }} label="Prise" variant="standard" />
            <TextField onChange={(e) => setTitle(e.target.value)} sx={{ width: '100%' }} label="Title" variant="standard" />
            <TextField onChange={(e) => setDiscount(e.target.value)} sx={{ width: '100%' }} label="Discount (percent)" variant="standard" />
            <TextField onChange={(e) => setColors(e.target.value)} sx={{ width: '100%' }} label="Colors (ex: red, green, yellow)" variant="standard" />
            <input type="file" id="" />
          </Box>
          <Box width='50%' display='flex' flexDirection='column' gap="10px">
            <TextField onChange={(e) => setCategory(e.target.value)} sx={{ width: '100%' }} label="Category" variant="standard" />
            <TextField onChange={(e) => setDescription(e.target.value)} sx={{ width: '100%' }} label="Description" variant="standard" />
            <TextField onChange={(e) => setBrand(e.target.value)} sx={{ width: '100%' }} label="Brand Name" variant="standard" />
            <TextField onChange={(e) => setYear(e.target.value)} sx={{ width: '100%' }} label="Year" variant="standard" />
            <TextField onChange={(e) => setSize(e.target.value)} sx={{ width: '100%' }} label="Size (ex: 144x144, 100x100, 120x120)" variant="standard" />
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
