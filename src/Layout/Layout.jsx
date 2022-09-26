import { Box, Stack, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import BallotIcon from '@mui/icons-material/Ballot';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddchartIcon from '@mui/icons-material/Addchart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Layout = ({ children }) => {
    return (
        <Box sx={{ height: '100%', display: 'flex', width: '100%' }}>
            <Stack sx={{ position: 'fixed', top: 0, bottom: '0' , width: '20%', height: '100%', background: '#1B1C1E', padding: '30px' }}>
                <Stack sx={{ justifyContent: 'flex-start', gap: '60px' }}>
                    <Box sx={{ width: '100px', height: '50px' }}>
                        <img style={{ width: '150px' }} src="/images/logo.png" alt="" />
                    </Box>
                    <Stack>
                        <Link to={'/overview'} sx={{ textDecoration: "none" }}><Button sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }} > <BallotIcon sx={{ fontSize: '18px' }} />Overview</Button></Link>
                        <Link to={'/users'} sx={{ textDecoration: "none" }}><Button sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }} > <GroupIcon sx={{ fontSize: '18px' }} /> Users</Button></Link>
                        <Link to={'/products'} sx={{ textDecoration: "none" }}><Button sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }} > <ProductionQuantityLimitsIcon sx={{ fontSize: '18px' }} />Products</Button></Link>
                    </Stack>
                    <Button sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', justifyContent: 'flex-start', marginTop: '160px' }}> <LogoutIcon sx={{ fontSize: '18px' }} /> Log out</Button>
                </Stack>
            </Stack>
            <Box sx={{ width: '80%', background: '#F8F7FD', position: 'absolute', right: '0' }}>
                <header style={{ width: '100%', padding: '30px', }} >
                    <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box>
                            <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >Overview <LocalFireDepartmentIcon style={{ fontSize: '40px' }} /> </h1>
                            <Typography variant='span' sx={{ color: '#c4c4c4' }} >Here's whats happening in your Cake Acount today</Typography>
                        </Box>
                        <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '7px' }}>
                            <AccountCircleIcon sx={{ fontSize: '44px' }} />
                            <Stack>
                                <Typography variant='span' sx={{ fontWeight: '800', fontSize: '16px' }}>Thomas</Typography>
                                <Typography variant='span' sx={{ color: '#c4c4c4', fontSize: '15px' }}>UI Designer</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack sx={{ flexDirection: 'row', gap: '25px', marginTop: '20px' }}>
                        <Stack sx={{ width: '25%', background: 'white', padding: '15px', borderRadius: '10px', gap: '14px' }}>
                            <Stack sx={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }} >
                                <Box sx={{ background: '#F0F0F0', padding: '5px', borderRadius: '7px' }}>
                                    <AddchartIcon />
                                </Box>
                                <Typography sx={{ fontWeight: '600' }} variant='span'>Account Reach</Typography>
                            </Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'>404K</Typography>
                                <Stack>
                                    <Typography variant='span' color={'green'}>0.8%</Typography>
                                    <Typography variant='span' sx={{ color: '#c4c4c4', fontSize: '14px' }}>This Week</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                        <Stack sx={{ width: '25%', background: 'white', padding: '15px', borderRadius: '10px', gap: '14px' }}>
                            <Stack sx={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }} >
                                <Box sx={{ background: '#F0F0F0', padding: '5px', borderRadius: '7px' }}>
                                    <GroupIcon />
                                </Box>
                                <Typography sx={{ fontWeight: '600' }} variant='span'>Account Reach</Typography>
                            </Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'>300K</Typography>
                                <Stack>
                                    <Typography variant='span' color={'red'}>0.8%</Typography>
                                    <Typography variant='span' sx={{ color: '#c4c4c4', fontSize: '14px' }}>This Week</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                        <Stack sx={{ width: '25%', background: 'white', padding: '15px', borderRadius: '10px', gap: '14px' }}>
                            <Stack sx={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }} >
                                <Box sx={{ background: '#F0F0F0', padding: '5px', borderRadius: '7px' }}>
                                    <ThumbUpIcon />
                                </Box>
                                <Typography sx={{ fontWeight: '600' }} variant='span'>Account Reach</Typography>
                            </Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'>340K</Typography>
                                <Stack>
                                    <Typography variant='span' color={'green'}>0.8%</Typography>
                                    <Typography variant='span' sx={{ color: '#c4c4c4', fontSize: '14px' }}>This Week</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                        <Stack sx={{ width: '25%', background: 'white', padding: '15px', borderRadius: '10px', gap: '14px' }}>
                            <Stack sx={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }} >
                                <Box sx={{ background: '#F0F0F0', padding: '5px', borderRadius: '7px' }}>
                                    <BookmarkIcon />
                                </Box>
                                <Typography sx={{ fontWeight: '600' }} variant='span'>Account Reach</Typography>
                            </Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'red' }}>
                                <Typography sx={{ fontWeight: '600' }} variant='h5'>40K</Typography>
                                <Stack>
                                    <Typography variant='span' color={'green'}>0.8%</Typography>
                                    <Typography variant='span' sx={{ color: '#c4c4c4', fontSize: '14px' }}>This Week</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Stack>
                </header>
                {children}
            </Box>
        </Box>
    )
}

export default Layout
