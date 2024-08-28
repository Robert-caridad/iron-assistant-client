import { Paper, Text, Title, Button, Grid, GridCol } from '@mantine/core';
import classes from './Technologies.module.css';

const Technologies = () => {

    return (
        <Grid>
            <GridCol span={4}>
                <Paper shadow="md" p="xl" radius="md" className={classes.card}>
                    <div>
                        <Text className={classes.category} size="xs">
                        </Text>
                        <Title order={4} className={classes.title}>
                        </Title>
                    </div>
                    <Button
                        component="a"
                        href="https://react.dev/"
                        target="_blank"
                        className={classes.button}
                        variant="white" color="dark">
                        React
                    </Button>
                </Paper>
            </GridCol>
            <GridCol span={4}>
                <Paper shadow="md" p="xl" radius="md" className={classes.card1}>
                    <div>
                        <Text className={classes.category} size="xs">

                        </Text>
                        <Title order={4} className={classes.title}>
                        </Title>
                    </div>
                    <Button
                        component="a"
                        href="https://mantine.dev/"
                        target="_blank"
                        variant="white"
                        color="dark">
                        Mantine
                    </Button>
                </Paper>
            </GridCol>
            <GridCol span={4}>
                <Paper shadow="md" p="xl" radius="md" className={classes.card2}>
                    <div>
                        <Text className={classes.category} size="xs">

                        </Text>
                        <Title order={4} className={classes.title}>
                        </Title>
                    </div>
                    <Button
                        component="a"
                        href="https://mqtt.org/"
                        target="_blank"
                        variant="white"
                        color="dark">
                        MQTT
                    </Button>
                </Paper>
            </GridCol>
            <GridCol span={4}>
                <Paper shadow="md" p="xl" radius="md" className={classes.card3}>
                    <div>
                        <Text className={classes.category} size="xs">

                        </Text>
                        <Title order={4} className={classes.title}>
                        </Title>
                    </div>
                    <Button
                        component="a"
                        href="https://nodejs.org/en"
                        target="_blank"
                        variant="white"
                        color="dark">
                        Node js
                    </Button>
                </Paper>
            </GridCol>
            <GridCol span={4}>
                <Paper shadow="md" p="xl" radius="md" className={classes.card4}>
                    <div>
                        <Text className={classes.category} size="xs">

                        </Text>
                        <Title order={4} className={classes.title}>
                        </Title>
                    </div>
                    <Button
                        component="a"
                        href="https://www.mongodb.com/es"
                        target="_blank"
                        variant="white"
                        color="dark">
                        Mongo DB
                    </Button>
                </Paper>
            </GridCol>
            <GridCol span={4}>
                <Paper shadow="md" p="xl" radius="md" className={classes.card5}>
                    <div>
                        <Text className={classes.category} size="xs">

                        </Text>
                        <Title order={4} className={classes.title}>
                        </Title>
                    </div>
                    <Button
                        component="a"
                        href="https://expressjs.com/"
                        target="_blank"
                        variant="white"
                        color="dark">
                        Express js
                    </Button>
                </Paper>
            </GridCol>
        </Grid>

    );
}

export default Technologies