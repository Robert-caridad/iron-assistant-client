import axios from 'axios'

class UsersServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api/users`
        })

        this.axiosApp.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('userToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getAllUsers() {
        return this.axiosApp.get('/')
    }

    getUser(email) {
        return this.axiosApp.get('/search', email)
    }

    getUserById(id) {
        return this.axiosApp.get(`/${id}`)
    }

    editUserById(id, userData) {
        return this.axiosApp.put(`/${id}`, userData)
    }

}

export default new UsersServices()