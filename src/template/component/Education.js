import { Typography } from '@mui/material'
import React from 'react'

const Education = ({edu_details}) => {
  return (
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
        <Typography sx={{fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>Education</Typography>
        {edu_details.map((data, i) => (
            <div key={i}>
                <Typography sx={{fontSize:'11px'}}>{data.from_yr} to {data.to_yr}</Typography>
                <Typography sx={{fontSize:'11px', fontWeight:'500'}}>{data.degree}</Typography>
                <Typography sx={{fontSize:'11px'}}>{data.univercity}</Typography>
            </div>
        ))}
    </div>
  )
}

export default Education