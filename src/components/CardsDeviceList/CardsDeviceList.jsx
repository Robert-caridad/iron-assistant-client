import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import axios from "axios"
import CardDevice from "../CardDevice/CardDevice"

const CardsDeviceList = () => {

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
                        <GridCol span={3} key={elm._id}>
                            <CardDevice {...elm} />
                        </GridCol>
                    )
                })
            }
        </Grid>
    )
}

export default CardsDeviceList