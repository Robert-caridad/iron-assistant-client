import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import CardAutomation from "../CardAutomation/CardAutomation"
import AutomationsServices from "../../services/automations.services"

const AutomationsList = () => {

    const [automations, setAutomations] = useState([])

    useEffect(() => {
        fetchAutomations()
    }, [])

    const fetchAutomations = () => {

        AutomationsServices
            .getAutomations()
            .then(({ data }) => setAutomations(data))
            .catch(err => console.log(err))
    }

    return (
        <Grid>
            {
                automations.map(elm => {
                    return (
                        <GridCol span={3} key={elm._id}>
                            <CardAutomation {...elm} />
                        </GridCol>
                    )
                })
            }
        </Grid>
    )
}

export default AutomationsList