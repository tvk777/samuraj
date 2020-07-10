import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader'

const ProfileInfo = (props) => {  
  if (!props.profile) {
    return <Preloader />
}
  return (
    <div>
      <div>
        <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="user ava" />
        <p>{props.profile.aboutMe}</p>
      </div>
      <div>        
        Looking for a job: {props.profile.lookingForAJob ? 'YES' : 'NO'}
        <p>{props.profile.lookingForAJobDescription}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;