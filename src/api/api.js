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

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`);
    },
    setUnFollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Should use profileApi.')
        return profileApi.getProfile(userId);
    }
}

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status});
    }

}


export const getAuth = () => instance.get(`auth/me`).then(response => response.data);

