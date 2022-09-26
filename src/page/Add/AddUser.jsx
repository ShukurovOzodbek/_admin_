import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import './addUser.css';
import { useDispatch } from 'react-redux'
import { addUsers } from '../../store/features/users/userSlice';

function AddUser() {
  const [name, setName] = useState('')
  const [surName, setSurName] = useState('')
  const [role, setRole] = useState('User')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const obj = {
      id: Math.random(Math.floor() * 100000000000),
      name,
      surname: surName,
      role,
      amount: 0,
      prCount: 0
    }
    
    dispatch(addUsers(obj))
    window.location.pathname = '/users'
  }

  return (
    <>
      <div className='bigCont'>
        <div className="boxCont">
          <h1>Add User</h1>
          <form onSubmit={handleSubmit} style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', width: '50%', gap: '20px', paddingBottom: '20px'}}>
            <TextField onChange={(e) => setName(e.target.value)} value={name} id="filled-basic" label="Name" variant="standard" />
            <TextField onChange={(e) => setSurName(e.target.value)} value={surName} id="filled-basic" label="Surname" variant="standard" />
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
              sx={{ width: '100%' }}
            >
              <MenuItem value={'Admin'}>Admin</MenuItem>
              <MenuItem value={'User'}>User</MenuItem>
            </Select>
            <Button type='submit' sx={{background: '#279574'}} variant='contained'>Add User</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser
