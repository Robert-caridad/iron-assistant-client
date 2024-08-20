import axios from 'axios'

class AuthServices {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.REACT_APP_API_URL}/api`
        })
    }

    signupUser(userData) {
        return this.axiosApp.post('/auth/signup', userData)
    }

    loginUser(userData) {
        return this.axiosApp.post('auth/login', userData)
    }

    verifyToken(authToken) {
        return this.axiosApp.get('/auth/verify', {
            headers: {
                Authorization: 'Bearer ${authToken}'
            }
        })
    }
}

export default new AuthServices()