import { Route, Router, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Grid, GridCol, Group } from "@mantine/core";

export default function Layout({ children }) {
    return (
        <Grid>
            <Grid.Col span="content"> <Navigation /></Grid.Col>
            <Grid.Col span="auto">{children}</Grid.Col>
        </Grid>
    )
}