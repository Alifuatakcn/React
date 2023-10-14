import React from 'react';
import "./profile-card.scss";

const ProfileCard = (props) => {
    const {avatar,name,location,shot,foolowers,following}=props;
    const image=require(`../../assets/img/${avatar}`);
    const profileBg={backroundImage:`url(${image})`}

  return (
    <div className='profile-card'>
    <div className='header' style={profileBg}></div>
    <div className='content'>

      <div className='avatar'></div>
      
      <h2>{name}</h2>
      <h4>{location}</h4>

      <div className="stats"> 
         <Stat name="Shot" value={shot}/>
         <Stat name="Followers" value={followers}/>
         <Stat name="Following" value={following}/>

      </div>
     </div>
    </div>
  )
}

export default ProfileCard