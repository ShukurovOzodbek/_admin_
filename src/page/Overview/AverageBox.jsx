import React from 'react'
import { Stack } from '@mui/material'

const AverageBox = ({ item }) => {
    return (
        <Stack alignItems="center" justifyContent="center" sx={{ padding: "20px 0px", borderBottom: "1px solid #000", borderLeft: "1px solid #000" }} spacing={1}>
            <p style={{ color: "C9C9CB", fontSize: "16px" }}>{item.title}</p>
            <b style={{ fontSize: "24px" }}>{item.value}</b>
        </Stack>
    )
}

export default AverageBox