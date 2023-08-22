import { Grid, Typography } from '@mui/material'
import React from 'react'

const Certification = ({certi_data}) => {
  return (
    <>
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
    <Typography className='tlt_text'>Certification</Typography></div>
    {certi_data.map((data, i) => {
      const course_summery = JSON.parse(data.course_descr)
      return(<Grid container key={i} sx={{p:'10px'}}>
      <Grid item sm={8}><Typography sx={{fontSize:'12px', fontWeight:'500'}}>{data.certi_title}</Typography></Grid>
      <Grid item sm={4}><Typography  className='para_text' sx={{textAlign:'right'}}>{data.course_start} - {data.course_end}</Typography></Grid>
      <Grid item sm={12}><Typography sx={{fontSize:'12px', fontWeight:'500', color:'#93899d'}}>{data.org_name}</Typography></Grid>
          {course_summery.blocks.map((role_data, j) => (
              <Typography sx={{fontSize:'10px'}} key={j}>{role_data.text}</Typography>
          ))}
  </Grid>)
    })}
    </>
  )
}

export default Certification