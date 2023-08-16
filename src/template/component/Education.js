import { Typography } from '@mui/material'
import React from 'react'

const Education = ({edu_details}) => {
  return (
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
        <Typography sx={{fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>Education</Typography>
        {edu_details.map((data, i) => (
            <div key={i}>
                <Typography sx={{fontSize:'11px'}}>{data.course_start} to {data.course_end}</Typography>
                <Typography sx={{fontSize:'12px', fontWeight:'600'}}>{data.course}</Typography>
                <Typography sx={{fontSize:'11px'}}>{data.university}</Typography>
            </div>
        ))}
    </div>
  )
}

export default Education