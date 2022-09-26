import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react'
import './addUser.css';

function AddUser() {
  const [age, setAge] = useState('User')

  return (
    <>
      <div className='bigCont'>
        <div className="boxCont">
          <h1>Add User</h1>
          <form style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', width: '50%', gap: '20px', paddingBottom: '20px'}}>
            <TextField id="filled-basic" label="Role" variant="standard" />
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              label="Role"
              sx={{ width: '100%' }}
            >
              <MenuItem value={'Admin'}>Admin</MenuItem>
              <MenuItem value={'User'}>User</MenuItem>
            </Select>
            <TextField id="filled-basic" label="Amount" variant="standard" />
            <Button sx={{background: '#279574'}} variant='contained'>Add User</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser
