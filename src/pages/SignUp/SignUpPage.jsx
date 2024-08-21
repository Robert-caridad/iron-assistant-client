// TODO: RESSTRUCTURAR COMPONENTES DE P'AGINA
import { Link } from 'react-router-dom'
import {
    Paper,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import classes from './SignUpPage.module.css';

import SignUpForm from "../../components/SignUpForm/SignUpForm"

const SignUpPage = () => {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome to Iron Assistant!
                </Title>
                <SignUpForm />
                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    <Anchor fw={700} component={Link} to="/login">
                        Login
                    </Anchor>
                </Text>
            </Paper >
        </div >
    )
}

export default SignUpPage