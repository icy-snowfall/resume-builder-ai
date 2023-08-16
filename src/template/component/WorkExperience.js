import { Grid, Typography } from '@mui/material'
import React from 'react'

const WorkExperience = ({exp_data}) => {
  return (
    <>
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
    <Typography sx={{ fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
    fontWeight: '500'}}>WorkExperience</Typography></div>
    {exp_data.map((data, i) => {
      const job_summery = JSON.parse(data.work_summery)
      return(
        <Grid container key={i} sx={{p:'10px'}}>
            <Grid item sm={8}><Typography sx={{fontSize:'12px', fontWeight:'500'}}>{data.position}</Typography></Grid>
            <Grid item sm={4}><Typography sx={{fontSize:'11px', textAlign:'right'}}>{data.work_start} - {data.work_leave}</Typography></Grid>
            <Grid item sm={12}><Typography sx={{fontSize:'12px', fontWeight:'500', color:'#93899d'}}>{data.org_name}</Typography></Grid>
            <ul style={{fontSize:'10px'}}>
                {job_summery.blocks.map((role_data, j) => (
                    <li key={j}>{role_data.text}</li>
                ))}
            </ul>
        </Grid>
    )})}
    </>
  )
}

export default WorkExperience