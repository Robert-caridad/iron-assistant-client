import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import axios from "axios"
import CardDevice from "../CardDevice/CardDevice"

const CardDevicesList = () => {

    const [Cards, setCards] = useState([])

    useEffect(() => {
        fetchCards()
    }, [])

    const fetchCards = () => {

        axios
            .get(`${import.meta.env.VITE_APP_API_URL}/api/devices`)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (
        <Grid>
            {
                Cards.map(elm => {
                    return (
                        <GridCol span={3}>
                            <CardDevice {...elm} key={elm._id} />
                        </GridCol>
                    )
                })
            }
        </Grid>
    )
}

export default CardDevicesList