import React from 'react';
const PersonalInfo = ({p_data, pasprt_img, position}) => {
  return (
    <div className='prs_info'>
        <img className='psphoto' src={pasprt_img} alt='image' />
        <div style={{fontSize:'14px'}}>{p_data.f_name} {p_data.l_name}</div>
        <div className='para_text'>{position}</div>
    </div>
  )
}

export default PersonalInfo