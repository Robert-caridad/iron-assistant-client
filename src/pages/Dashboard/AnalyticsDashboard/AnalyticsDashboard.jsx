import { Center, Group, Text, Title } from "@mantine/core"
import Kwcharts from "../../../components/Kwcharts/Kwcharts"
import RadialBar from "../../../components/RadialBar/RadialBar"
import SlopeCharts from "../../../components/SlopeCharts/SlopeCharts "

const AnalyticsDashboard = () => {
    return (
        <div>
            <Center mb={100}>
                <Title >Analytics Dashboard</Title>
            </Center>
            <Center>
                <Text>Monthly kW Consumption</Text>
            </Center>
            <Kwcharts />
            <Center>
                <Text mb={40} mt={40}>Analytics Daily</Text>
            </Center>
            <Group justify="center" >
                <RadialBar percent={80} text={'Battery charged'} />
                <RadialBar percent={54} text={'Water tank'} />
            </Group>
            <Center>
                <Text mb={40} mt={40}>Most Used Devices</Text>
            </Center>
            <Group justify="center" >
                <SlopeCharts />
            </Group>
        </div >
    )
}

export default AnalyticsDashboard
