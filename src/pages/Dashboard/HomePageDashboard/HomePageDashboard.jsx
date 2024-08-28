import AreasList from "../../../components/AreasList/AreasList"
import AutomationsList from "../../../components/AutomationsList/AutomationsList"
import DevicesList from "../../../components/DevicesList/DevicesList"

const HomePagesDashboard = () => {
    return (
        <div>
            <h2>Areas</h2>
            <AreasList />

            <h2>Devices</h2>
            <DevicesList />

            <h2>Automations</h2>
            <AutomationsList />
        </div>
    )
}

export default HomePagesDashboard
