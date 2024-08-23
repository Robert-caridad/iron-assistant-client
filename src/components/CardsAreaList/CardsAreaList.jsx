import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import axios from "axios"
import CardArea from "../CardArea/CardArea"

const CardsAreaList = () => {

    const [Cards, setCards] = useState([])

    useEffect(() => {
        fetchCards()
    }, [])

    const fetchCards = () => {

        axios
            .get(`${import.meta.env.VITE_APP_API_URL}/api/areas`)
            .then(({ data }) => setCards(data))
            .catch(err => console.log(err))
    }

    return (
        <Grid>
            {
                Cards.map(elm => {
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

export default CardsAreaList