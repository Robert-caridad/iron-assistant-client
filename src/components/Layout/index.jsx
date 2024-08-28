import Navigation from "../Navigation/Navigation"
import { AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export default function Layout({ children }) {
    const [opened, { toggle }] = useDisclosure()

    return (
        <AppShell
            navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="lg"
                />
            </AppShell.Header>

            <AppShell.Navbar><Navigation /></AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}