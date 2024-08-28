import { Anchor, Group, ActionIcon, rem, Image } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import { MantineLogo } from '@mantinex/mantine-logo'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import { FOOTER_LINKS } from '../../consts/navigation.consts'

const Footer = () => {
    const items = FOOTER_LINKS.map((link) => (
        <Anchor
            c="dimmed"
            key={link.label}
            component={Link}
            to={link.to}
            lh={1}
            size="sm"
        >
            {link.label}
        </Anchor>
    ))

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Anchor component={Link} to='/' >
                    <Image src={'https://res.cloudinary.com/dwk8n7yvq/image/upload/v1724861078/home-assistant-social-media-logo-round_tdskva.png'} width={30} height={30} />
                </Anchor>
                <Group className={classes.links}>{items}</Group>

                <Group gap="xs" justify="flex-end" wrap="nowrap">
                    <ActionIcon component="a" href="https://x.com" size="lg" variant="default" radius="xl" target="_blank">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon component="a" href="https://www.youtube.com" size="lg" variant="default" radius="xl" target="_blank">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon component="a" href="https://www.instagram.com/" size="lg" variant="default" radius="xl" target="_blank">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    )
}

export default Footer