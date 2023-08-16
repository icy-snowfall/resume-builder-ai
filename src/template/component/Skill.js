import { Grid, Typography } from '@mui/material'
import React from 'react'

const Skill = ({skills, title}) => {
  return (
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
        <Typography sx={{    fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>{title}</Typography>
        {skills.map((data, index) => (
            <Grid container key={index} sx={{marginBottom:'5px'}}>
                <Grid sx={{fontSize:'11px', fontWeight:'700'}} item sm={9}>{data.skill}</Grid>
                <Grid sx={{fontSize:'11px'}} item sm={3}>{data.rating}</Grid>
            </Grid>
        ))}
    </div>
  )
}

export default Skill