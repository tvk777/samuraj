import * as axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "api-key": "51ee1762-c9d5-46d2-a649-e67e5b4e497b"
        }
    }
);

export const getUsers = (currentPage=1, pageSize=10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => response.data);
};

export const setFollow = (userId) => {
    return instance.post(`follow/${userId}`);
}

export const setUnFollow = (userId) => {
    return instance.delete(`follow/${userId}`);
}

export const getAuth = () => instance.get(`auth/me`).then(response => response.data);

export const getProfile = (userId) => instance.get(`profile/${userId}`).then(response => response.data);