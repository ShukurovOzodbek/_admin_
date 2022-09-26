import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../store/features/users/userSlice';
import axios from 'axios';

function EditUser() {
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [role, setRole] = useState('User')
    const [obj, setObj] = useState('User')
    let path = window.location.pathname.split('/').splice(-1)[0]
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${path}`)
            .then(res => {
                setObj(res.data)
                setSurName(res.data.surname)
                setName(res.data.name)
                setRole(res.data.role)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const ob = {
            id: Math.random(Math.floor() * 100000000000),
            name: name === '' ? obj.name : name,
            surname: surName === '' ? obj.surname : surName,
            role: role === '' ? obj.role : role,
            amount: obj.amount,
            prCount: obj.prCount
        }

        axios.patch(`http://localhost:3001/users/${path}`, ob)
            .then(res => console.log(res.data))
        window.location.pathname = '/users'
    }

    return (
        <>
            <div className='bigCont'>
                <div className="boxCont">
                    <h1>Edit User</h1>
                    <form onSubmit={handleSubmit} style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column', width: '50%', gap: '20px', paddingBottom: '20px' }}>
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
                        <Button type='submit' sx={{ background: '#279574' }} variant='contained'>Add User</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditUser
