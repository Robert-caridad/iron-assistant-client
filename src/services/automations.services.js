import axios from 'axios'

class AutomationsServices {
    constructor() {

        this.axiosApp = axios.create({
            baseURL: `${import.meta.env.VITE_APP_API_URL}/api/automations`
        })

        this.axiosApp.interceptors.request.use(config => {
            const storedToken = localStorage.getItem('userToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }
            return config
        })
    }

    getAutomations() {
        return this.axiosApp.get('/')
    }

    getAutomationById(idAutomation) {
        return this.axiosApp.get(`/${idAutomation}`, idAutomation)
    }

    postNewAutomations(automationData) {
        return this.axiosApp.post('/', automationData)
    }

    putEditAutomationsById(idDevice, automationData) {
        return this.axiosApp.put(`/${idDevice}`, automationData)
    }
    deleteAutomationsById() {
        return this.axiosApp.delete('/:id')
    }
}

export default new AutomationsServices()