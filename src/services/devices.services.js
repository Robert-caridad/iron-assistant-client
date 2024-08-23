import axios from 'axios'

class DevicesServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api/devices`
        })

        this.axiosApp.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('userToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })

    }

    getAllDevices() {
        return this.axiosApp.get('')
    }

    getAvailableDevices() {
        return this.axiosApp.get('/available')
    }

    searchDevices(query) {
        return this.axiosApp.get('/search', query)
    }

    getDeviceById(idDevice) {
        return this.axiosApp.get(`/${idDevice}`, idDevice)
    }

    postNewDevice(deviceData) {
        return this.axiosApp.post('/', deviceData)
    }

    putEditDeviceById(idDevice, deviceData) {
        return this.axiosApp.put(`/${idDevice}`, deviceData)
    }
    deleteDeviceById() {
        return this.axiosApp.delete('/:id')
    }
}

export default new DevicesServices()