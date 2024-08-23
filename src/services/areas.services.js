import axios from 'axios'

class AreasServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api/areas`
        })

        this.axiosApp.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('userToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getAreas() {
        return this.axiosApp.post('/')
    }

    searchAreas(query) {
        return this.axiosApp.get('/search', query)
    }

    getAreaById(idDevice) {
        return this.axiosApp.get(`/${idDevice}`, idDevice)
    }

    postNewArea(deviceData) {
        return this.axiosApp.post('/', deviceData)
    }

    putEditAreaById(idDevice, deviceData) {
        return this.axiosApp.put(`/${idDevice}`, deviceData)
    }
    deleteAreaById() {
        return this.axiosApp.delete('/:id')
    }
}

export default new AreasServices()