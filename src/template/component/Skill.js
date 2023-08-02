import { Grid, Typography } from '@mui/material'
import React from 'react'

const Skill = ({skills}) => {
  return (
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
        <Typography sx={{    fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
        fontWeight: '500'}}>{skills.title}</Typography>
        {skills.skill_set.map((data, index) => (
            <Grid container key={index} sx={{marginBottom:'5px'}}>
                <Grid sx={{fontSize:'11px'}} item sm={9}>{data.label}</Grid>
                <Grid sx={{fontSize:'11px'}} item sm={3}>{data.scale}</Grid>
            </Grid>
        ))}
    </div>
  )
}

export default Skill