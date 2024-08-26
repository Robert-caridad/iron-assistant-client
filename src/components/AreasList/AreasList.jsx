import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import CardArea from "../CardArea/CardArea"
import AreasServices from "../../services/areas.services"

const AreasList = () => {

    const [areas, setAreas] = useState([])

    useEffect(() => {
        fetchAreas()
    }, [])

    const fetchAreas = () => {
        AreasServices
            .getAreas()
            .then(({ data }) => setAreas(data))
            .catch(err => console.log(err))
    }

    return (
        <Grid>
            {
                areas.map(elm => {
                    return (
                        <GridCol span={3} key={elm._id}>
                            <CardArea {...elm} />
                        </GridCol>
                    )
                })
            }
        </Grid>
    )
}

export default AreasList