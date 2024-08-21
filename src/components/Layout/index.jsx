import { Route, Router, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Grid, GridCol, Group } from "@mantine/core";

export default function Layout({ children }) {
    return (
        <Grid>
            <Grid.Col span={3}> <Navigation /></Grid.Col>
            <Grid.Col span={9}>{children}</Grid.Col>
        </Grid>
    )
}