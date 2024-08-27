import { Route, Router, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Grid, GridCol, Group } from "@mantine/core";
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Layout({ children }) {
    const [opened, { toggle }] = useDisclosure();

    return (
        // <Grid>
        //     <Grid.Col span="content"> <Navigation /></Grid.Col>
        //     <Grid.Col span="auto">{children}</Grid.Col>
        // </Grid>

        <AppShell
            // header={{ height: 60 }}
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