import Navigation from "../Navigation/Navigation"
import { AppShell, Burger, Center, Group } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineLogo } from "@mantinex/mantine-logo"
import ButtonColorTheme from "../ButtonColorTheme/ButtonColorTheme"

export default function Layout({ children }) {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            header={{
                height: 60
            }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened }
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="lg"
                    m='xs'
                />
                <Group justify="flex-end" m='xs'>
                    <ButtonColorTheme />
                </Group>



            </AppShell.Header>
            <AppShell.Navbar ><Navigation /></AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}