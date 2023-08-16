import { Typography } from '@mui/material'
import React, { useState } from 'react'

const Summery = ({summery}) => {
  const data = JSON.parse(summery)
  return (
    <div style={{ textAlign: 'left', padding: '10px'}}>
        <Typography sx={{    fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>Summery</Typography>
        <Typography sx={{ fontSize: '11px', textAlign: 'justify'}}>
          {data.blocks.map((summery, index) => (
            <Typography key={index} sx={{fontSize:'10px', textAlign:'justify'}}>{summery.text}</Typography>
          ))}
        </Typography>
    </div>
  )
}

export default Summery