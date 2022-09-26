import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductItem = () => {
  const [obj, setObj] = useState({})
  const [name, setName] = useState('')
  const [cat, setCat] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [brand, setBrand] = useState('')
  const [year, setYear] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [picture, setPictures] = useState('')
  const [video, setVideo] = useState('')
  let path = window.location.pathname.split('/').splice(-1)[0]

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${path}`)
      .then(res => {
        setObj(res.data)
        setName(res.data.name)
        setCat(res.data.category)
        setPrice(res.data.price)
        setTitle(res.data.title)
        setDescr(res.data.description)
        setBrand(res.data.company.brand)
        setYear(res.data.company.year)
        setSize(res.data.sizes)
        setColor(res.data.colors)
        setPictures(res.data.media.pictures)
        setVideo(res.data.media.video)
      })
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()

    let object = {
      id: Math.random(),
      name: name === '' ? obj.name : name,
      category: cat === '' ? obj.category : cat,
      price: price === '' ? obj.price : price,
      title: title === '' ? obj.title : title,
      description: descr === '' ? obj.description : descr,
      discount: {
        isSale: false,
        percent: 20
      },
      company: {
        brand: brand === '' ? obj.company?.brand : brand,
        icon: obj.icon,
        year: year === '' ? obj.company?.year : year
      },
      rate: 0,
      size: size.length === 0 ? obj.size : size.split(' '),
      colors: color.length === 0 ? obj.colors : size.split(' '),
      media: {
        pictures: picture.length === 0 ? obj.media?.pictures : picture.split(' '),
        video: video.length === 0 ? obj.media?.video : video.split(' ')
      },
      qt: 10
    }

    axios.patch(`http://localhost:3001/products/${path}`, object)
      .then(res => console.log(res.data))
  }
  return (
    <div style={{ display: 'flex', width: '90%' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%', paddingBottom: '20px', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: '31%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img src={obj.media?.pictures} width={'250px'} style={{ borderRadius: '10px' }} height={'200px'} alt="" />
          <input type="file" />
        </div>
        <TextField onChange={(e) => setName(e.target.value)} value={name} sx={{ width: '40%', marginTop: '240px' }} variant='standard' placeholder='Name' />
        <TextField onChange={(e) => setCat(e.target.value)} value={cat} sx={{ width: '40%', marginTop: '240px' }} variant='standard' placeholder='Price' />
        <TextField onChange={(e) => setTitle(e.target.value)} value={title} sx={{ width: '40%' }} variant='standard' placeholder='Title' />
        <TextField onChange={(e) => setDescr(e.target.value)} value={descr} sx={{ width: '40%' }} variant='standard' placeholder='Description' />
        <TextField onChange={(e) => setPrice(e.target.value)} value={price} sx={{ width: '40%' }} variant='standard' placeholder='Discount (percent)' />
        <TextField onChange={(e) => setColor(e.target.value)} value={color} sx={{ width: '40%' }} variant='standard' placeholder='Colors ex(red, black, yellow)' />
        <TextField onChange={(e) => setBrand(e.target.value)} value={brand} sx={{ width: '40%' }} variant='standard' placeholder='Brand' />
        <TextField onChange={(e) => setSize(e.target.value)} value={size} sx={{ width: '40%' }} variant='standard' placeholder='Size ex(107x234, 127x244)' />
        <Button type='submit' sx={{ width: '40%', background: '#279574' }} variant='contained'>Add</Button>
      </form>
    </div>
  )
}

export default ProductItem
