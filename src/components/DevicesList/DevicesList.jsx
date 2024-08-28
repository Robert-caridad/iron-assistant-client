import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import CardDevice from "../CardDevice/CardDevice"
import DevicesServices from "../../services/devices.services"

const DevicesList = () => {

    const [devices, setDevices] = useState([])

    useEffect(() => {
        fetchDevices()
    }, [])

    const fetchDevices = () => {

        DevicesServices
            .getAllDevices()
            .then(({ data }) => setDevices(data))
            .catch(err => console.log(err))
    }

    return (
        <Grid>
            {
                devices.map(elm => {
                    return (
                        <GridCol span={3} key={elm._id}>
                            <CardDevice {...elm} devicesLength={devices.length} />
                        </GridCol>
                    )
                })
            }
        </Grid>
    )
}

export default DevicesList