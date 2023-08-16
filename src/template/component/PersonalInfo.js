import React from 'react';
const PersonalInfo = ({p_data, pasprt_img, position}) => {
  return (
    <div style={{ background: '#a392b5', borderRadius: '0 0 25% 25%', color:'#fff',
    padding: '10px 0', height: '110px', textAlign:'center'}}>
        <img style={{width: '35%', borderRadius: '50%', height: '77px'}} 
        src={pasprt_img} alt='image' />
        <div style={{fontSize:'14px'}}>{p_data.f_name} {p_data.l_name}</div>
        <div style={{fontSize:'11px'}}>{position}</div>
    </div>
  )
}

export default PersonalInfo