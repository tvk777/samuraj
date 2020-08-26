import * as axios from 'axios';

const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            "api-key": "b60deeab-efe2-4427-a6b1-8c6669ed8733"
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
        return instance.put(`profile/status/`, { status: status });
    }

}


export const authApi = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe }).then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`).then(response => response.data);
    }
}

