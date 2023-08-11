import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
const PersonalDetails = ({p_data}) => {
  return (
    <>
    <div style={{textAlign:'left', margin:'10px auto', padding:'0 10px'}}>
    <Typography sx={{    fontSize: '14px', borderBottom: '0.5px solid grey', marginBottom: '5px',
    fontWeight: '500'}}>Personal Details</Typography>
    <Typography sx={{fontSize:'11px'}} ><EmailIcon sx={{fontSize:'14px'}} /> nitin.patil@annalect.com </Typography>
    <Typography sx={{fontSize:'11px'}} ><CallIcon sx={{fontSize:'14px'}}  /> +91 9876543210</Typography>
    <Typography sx={{fontSize:'11px'}} ><LocationOnIcon sx={{fontSize:'14px'}}  /> Hyderabad</Typography>
    <Typography sx={{fontSize:'11px'}} ><LinkedInIcon sx={{fontSize:'14px'}}  /> /nitinpatil</Typography>
    </div>
    </>
  )
}

export default PersonalDetails