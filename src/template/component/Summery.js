import { Typography } from '@mui/material'
import React from 'react'

const Summery = () => {
  return (
    <div style={{ textAlign: 'left', padding: '10px'}}>
        <Typography sx={{    fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>Summery</Typography>
        <Typography sx={{ fontSize: '11px', textAlign: 'justify'}}>Organized and efficient project manager with 11+ years of experience 
            managing large-scale cloud computing and IT-related projects. Seeking to leverage leadership 
            experience and in-depth cloud computing knowledge to join Amazon as an IT Project Manager.
        </Typography>
    </div>
  )
}

export default Summery