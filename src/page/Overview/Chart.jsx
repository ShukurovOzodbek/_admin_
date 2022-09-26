import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import { LineChart } from './LineChart'
import AverageBox from './AverageBox'

const Chart = () => {
    const averageValues = [
        {
            title: "Resolved",
            value: 409,
        },
        {
            title: "Received",
            value: 426,
        },
        {
            title: "Average first response time",
            value: "33m",
        },
        {
            title: "Average response time",
            value: "3h 8m",
        },
        {
            title: "Resolution within SLA",
            value: "94%",
        },
    ]
    useEffect(() => {
        const link = document.querySelectorAll('#link')

        link.forEach((elem) => {
            elem.classList.remove('active')
        })
        link[0].classList.add('active')
    })

    return (
        <Stack sx={{ maxWidth: "1920px", minHeight: '72vh', margin: "0 auto", height: "50vh", padding: "20px" }} alignItems="center" direction="row" spacing={4}>
            <Box sx={{ width: "50%", height: "100%" }}>
                <Stack spacing={1}>
                    <b style={{ fontSize: "20px", whiteSpace: "nowrap" }}>Today's trands</b>
                    <p style={{ color: "#C9C9CB", fontSize: "14px", whiteSpace: "nowrap" }}>as of 26 September 2022, {`  ${new Date().getHours()}:${new Date().getMinutes()}`}</p>
                </Stack>
                <Box sx={{ width: "100%", height: "80%" }}>
                    <LineChart />
                </Box>
            </Box>
            <Stack sx={{ width: "50%", height: "100%" }}>
                {
                    averageValues.map((item, index) => <AverageBox key={index} item={item} />)
                }
            </Stack>
        </Stack>
    )
}

export default Chart