import { Grid, Typography } from '@mui/material'
import React from 'react'

const Skill = ({skills, title}) => {
  return (
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
        <Typography className='tlt_text'>{title}</Typography>
        {skills.map((data, index) => (
            <Grid container key={index} sx={{marginBottom:'5px'}}>
                <Grid className='para_text' sx={{fontWeight:'700'}} item sm={9}>{data.skill}</Grid>
                <Grid className='para_text' item sm={3}>{data.rating}</Grid>
            </Grid>
        ))}
    </div>
  )
}

export default Skill