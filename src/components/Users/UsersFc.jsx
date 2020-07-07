import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'

const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      props.setUsers(response.data.items);
    })
    /* props.setUsers([
      {
        id: 1,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg65sImyCbkC498ENwcOmtUf-27nFg6AMZrw&usqp=CAU',
        followed: true, fullName: 'Dimych', status: 'I am Dimych', location: { country: 'Belarus', city: 'Minsk' }
    },
    {
        id: 2,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg65sImyCbkC498ENwcOmtUf-27nFg6AMZrw&usqp=CAU',
        followed: false, fullName: 'Vasya', status: 'I am Vasya', location: { country: 'Ukraine', city: 'Dnipro' }
    },
    {
        id: 3,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg65sImyCbkC498ENwcOmtUf-27nFg6AMZrw&usqp=CAU',
        followed: true, fullName: 'Mark', status: 'I am Mark', location: { country: 'Norway', city: 'Bergen' }
    },
    {
        id: 4,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg65sImyCbkC498ENwcOmtUf-27nFg6AMZrw&usqp=CAU',
        followed: false, fullName: 'Victor', status: 'I am Victor', location: { country: 'Germany', city: 'Berlin' }
    },
    ]
    ) */
}

  return (
    <div>
      {props.users.map((u) => {
        console.log(u);
        return (
          <div key={u.id}>
            <div>
              <p>
                <img src={u.photos.small!==null ? u.photos.small : userPhoto} alt="ava" style={{width: '100px'}} />
              </p>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}              
            </div>
            <div>
              <p>{u.name}</p>
              <p>{u.status}</p>
              <p>{"u.location.country"}</p>
              <p>{"u.location.city"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
