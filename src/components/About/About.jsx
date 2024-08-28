import { Card, Avatar, Text, Group, Button, Anchor } from '@mantine/core'
import classes from './About.module.css'

const statsR = [
    { value: '34K', label: 'Followers' },
    { value: '76', label: 'Follows' },
    { value: '4.8K', label: 'Posts' },
]

const statsRDB = [
    { value: '76K', label: 'Followers' },
    { value: '170', label: 'Follows' },
    { value: '2.6K', label: 'Posts' },
]

const About = () => {
    const itemsR = statsR.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ))

    const itemsRDB = statsRDB.map((stat) => (
        <div key={stat.label}>
            <Text ta="center" fz="lg" fw={500}>
                {stat.value}
            </Text>
            <Text ta="center" fz="sm" c="dimmed" lh={1}>
                {stat.label}
            </Text>
        </div>
    ))

    return (
        <Group mt={25} justify="center" gap={100}>
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
                    {itemsR}
                </Group>
                <Button component={Anchor} href='https://www.instagram.com/' target="_blank" radius="md" mt="xl" size="md" variant="default">
                    Follow
                </Button>
            </Card>

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
                    Rubén Díaz
                </Text>
                <Text ta="center" fz="sm" c="dimmed">
                    Fullstack engineer
                </Text>
                <Group mt="md" justify="center" gap={30}>
                    {itemsRDB}
                </Group>
                <Button component={Anchor} href='https://www.instagram.com/rdbcodelab' target="_blank" fullWidth radius="md" mt="xl" size="md" variant="default">
                    Follow
                </Button>
            </Card>
        </Group>
    )
}

export default About