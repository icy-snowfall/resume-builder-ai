import { Typography } from '@mui/material'
import React from 'react'

const Education = ({edu_details}) => {
  return (
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
        <Typography className='tlt_text'>Education</Typography>
        {edu_details.map((data, i) => (
            <div key={i}>
                <Typography className='para_text'>{data.course_start} to {data.course_end}</Typography>
                <Typography sx={{fontSize:'12px', fontWeight:'600'}}>{data.course}</Typography>
                <Typography className='para_text'>{data.university}</Typography>
            </div>
        ))}
    </div>
  )
}

export default Education