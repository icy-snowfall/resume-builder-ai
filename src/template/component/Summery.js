import { Typography } from '@mui/material'
import React, { useState } from 'react'

const Summery = ({summery}) => {
  const data = JSON.parse(summery)
  return (
    <div style={{ textAlign: 'left', padding: '10px'}}>
        <Typography className='tlt_text'>Summery</Typography>
        <Typography>
          {data.blocks.map((summery, index) => (
            <Typography key={index} sx={{fontSize:'10px', textAlign:'justify'}}>{summery.text}</Typography>
          ))}
        </Typography>
    </div>
  )
}

export default Summery