import {
    Group,
    Button,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Anchor,
    Text
} from '@mantine/core'
import { MantineLogo } from '@mantinex/mantine-logo'
import { useDisclosure } from '@mantine/hooks'
import classes from './NavigationHomePage.module.css'
import { Link } from 'react-router-dom'
import ButtonColorTheme from '../ButtonColorTheme/ButtonColorTheme'
import { AuthContext } from '../../contexts/auth.contexts'
import { useContext } from 'react'

const NavigationHomePage = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)

    const { loggedUser, logoutUser } = useContext(AuthContext)

    return (
        <Box pb={120}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Anchor component={Link} to='/' >
                        <MantineLogo size={30} />
                    </Anchor>
                    {
                        loggedUser ?
                            <Group visibleFrom="sm">
                                <Text>{`Welcome! ${loggedUser.username}`}</Text>
                                <Button variant="default" component={Link} to="/dashboard/home">Dashboard</Button>
                                <Button onClick={logoutUser}>Logout</Button>
                                <ButtonColorTheme />
                            </Group> :
                            <Group visibleFrom="sm">
                                <Button variant="default" component={Link} to="/login">Log in</Button>
                                <Button component={Link} to="/signup">Sign up</Button>
                                <ButtonColorTheme />
                            </Group>
                    }

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default" component={Link} to="/login">Log in</Button>
                        <Button component={Link} to="/login">Sign up</Button>
                    </Group>
                    <Group justify="center">
                        <ButtonColorTheme />
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    )
}

export default NavigationHomePage