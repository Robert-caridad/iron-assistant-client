import { useState } from 'react'
import { UnstyledButton, Tooltip, Title, rem, Anchor, AppShell } from '@mantine/core'
import {
    IconHome2,
    IconGauge,
    IconDeviceDesktopAnalytics,
    IconUser,
    IconSettings,
} from '@tabler/icons-react'
import { MantineLogo } from '@mantinex/mantine-logo'
import classes from './Navigation.module.css'
import { Link, useNavigate } from 'react-router-dom'

const Home = [
    { nameLink: 'Home', route: '/dashboard/home' },
]

const Dashboard = [
    { nameLink: 'Devices', route: '/dashboard/devices' },
    { nameLink: 'Areas', route: '/dashboard/areas' },
    { nameLink: 'Automations', route: '/dashboard/automations' },
]

const Analytics = [
    'Spare1',
    'Spare2',
    'Spare3'
]

const Account = [
    'Spare4',
    'Spare5',
    'Spare6'
]

const Settings = [
    'Spare7',
    'Spare8',
    'Spare9'
]

const mainLinksMockdata = [
    { icon: IconHome2, label: 'Home', selectLink: Home },
    { icon: IconGauge, label: 'Dashboard', selectLink: Dashboard },
    { icon: IconDeviceDesktopAnalytics, label: 'Analytics', selectLink: Analytics },
    { icon: IconUser, label: 'Account', selectLink: Account },
    { icon: IconSettings, label: 'Settings', selectLink: Settings },
]

const Navigation = () => {
    const [active, setActive] = useState('Home')
    const [activeLink, setActiveLink] = useState('Home')
    const [selectLink, setSelectLink] = useState(Home)

    const navigate = useNavigate()

    const mainLinks = mainLinksMockdata.map((link) => (
        <Tooltip
            label={link.label}
            position="right"
            withArrow
            transitionProps={{ duration: 0 }}
            key={link.label}
        >
            <UnstyledButton
                onClick={() => {
                    setActive(link.label)
                    setSelectLink(link.selectLink)
                }
                }
                className={classes.mainLink}
                data-active={link.label === active || undefined}
            >
                <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    ))

    const links = (data) => data.map((link) => (
        <a
            className={classes.link}
            data-active={activeLink === link.nameLink || undefined}
            href="#"
            onClick={(event) => {
                event.preventDefault()
                setActiveLink(link.nameLink)
                navigate(link.route)
            }}
            key={link.nameLink}
        >
            {link.nameLink}
        </a>
    ))

    return (
        <nav className={classes.navbar} >
            <div className={classes.wrapper}>
                <div className={classes.aside}>
                    <div className={classes.logo}>
                        <Anchor component={Link} to='/' >
                            <MantineLogo type="mark" size={30} />
                        </Anchor>
                    </div>
                    {mainLinks}
                </div>
                <div className={classes.main}>
                    <Title order={4} className={classes.title}>
                        {active}
                    </Title>
                    {links(selectLink)}
                </div>
            </div>
        </nav>
    )
}

export default Navigation