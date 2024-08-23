import CardsAreaList from "../../../components/CardsAreaList/CardsAreaList"
import CardsAutomationList from "../../../components/CardsAutomationList/CardsAutomationList"


const HomePagesDashboard = () => {
    return (
        <div>
            <h1>Dash Board</h1>
            <CardsAreaList />
            <h2>automations</h2>
            <CardsAutomationList />
        </div>
    )
}

export default HomePagesDashboard