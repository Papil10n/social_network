import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "84c7f04c-a075-4a9c-a48a-55616b0af6bc"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 9) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data );
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`follow/${id}`,);
    },
    authorize() {
        return instance.get('auth/me');
    },
    getProfile(userId = 1 ) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    },

}

export const authAPI = {
    me() {
        return instance.get('auth/me');
    }
}

export const profileAPI = {
    getProfile(userId = 1 ) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId = 1 ) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
}