import { Link } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"
import {
    Paper,
    Title,
    Text,
    Anchor,
} from '@mantine/core'
import classes from './LoginPages.module.css'

const LoginPage = () => {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Iron Assistant!
                </Title>
                <LoginForm />
                <Text ta="center" mt="md">
                    Don&apost have an account?{' '}
                    <Anchor fw={700} component={Link} to="/signup">
                        Register
                    </Anchor>
                </Text>
                <Text ta="center" mt="md">
                    <Anchor fw={700} component={Link} to="/">
                        Back
                    </Anchor>
                </Text>
            </Paper>
        </div >
    )
}

export default LoginPage