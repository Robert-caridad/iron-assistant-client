import { useEffect, useState } from "react"
import { Grid, GridCol } from "@mantine/core"
import axios from "axios"
import CardAutomation from "../CardAutomation/CardAutomation"

const CardsAutomationList = () => {

    const [Cards, setCards] = useState([])

    useEffect(() => {
        fetchCards()
    }, [])

    const fetchCards = () => {

        // axios
        //     .get(`${import.meta.env.VITE_APP_API_URL}/api/automations`)
        //     .then(({ data }) => setCards(data))
        //     .catch(err => console.log(err))
    }

    return (
        <Grid>
            {
                // Cards.map(elm => {
                //     return (
                //         <GridCol span={3} key={elm._id}>
                //             <CardAutomation {...elm} />
                //         </GridCol>
                //     )
                // })
            }
        </Grid>
    )
}

export default CardsAutomationList