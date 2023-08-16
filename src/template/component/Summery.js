import { Typography } from '@mui/material'
import React from 'react'

const Summery = ({summery}) => {
  
  return (
    <div style={{ textAlign: 'left', padding: '10px'}}>
        <Typography sx={{    fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>Summery</Typography>
        <Typography sx={{ fontSize: '11px', textAlign: 'justify'}}>
          {summery}
        </Typography>
    </div>
  )
}

export default Summery