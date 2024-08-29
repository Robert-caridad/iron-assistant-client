import { Card, Avatar, Text, Group, Button, Grid, GridCol } from '@mantine/core';
import classes from './About.module.css';
import { STATSR, STATSRDB } from './../../consts/about.consts'

const About = () => {

    const items = STATSR.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));

    const items1 = STATSRDB.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ));


    return (
        <Grid justify='center'>
            <GridCol span={3}>
                <Card withBorder padding="xl" radius="md" className={classes.card}>
                    <Card.Section
                        h={140}
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                        }}
                    />
                    <Avatar
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                        size={80}
                        radius={80}
                        mx="auto"
                        mt={-30}
                        className={classes.avatar}
                    />
                    <Text ta="center" fz="lg" fw={500} mt="sm">
                        Robert Caridad
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                        Fullstack engineer
                    </Text>
                    <Group mt="md" justify="center" gap={30}>
                        {items}
                    </Group>
                    <Button
                        component='a'
                        href=''
                        target="_blank"
                        fullWidth
                        radius="md" mt="xl" size="md"
                        variant="default">
                        Follow
                    </Button>
                </Card>
            </GridCol>

            <GridCol span={3}>
                <Card withBorder padding="xl" radius="md" className={classes.card}>
                    <Card.Section
                        h={140}
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
                        }}
                    />
                    <Avatar
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                        size={80}
                        radius={80}
                        mx="auto"
                        mt={-30}
                        className={classes.avatar}
                    />
                    <Text ta="center" fz="lg" fw={500} mt="sm">
                        Ruben Diaz
                    </Text>
                    <Text ta="center" fz="sm" c="dimmed">
                        Fullstack engineer
                    </Text>
                    <Group mt="md" justify="center" gap={30}>
                        {items1}
                    </Group>
                    <Button
                        component='a'
                        href='https://www.linkedin.com/in/ruben-d%C3%ADaz-bola%C3%B1o/'
                        target="_blank"
                        fullWidth
                        radius="md"
                        mt="xl" size="md"
                        variant="default">
                        Follow
                    </Button>
                </Card>
            </GridCol>
        </Grid>
    );
}
export default About