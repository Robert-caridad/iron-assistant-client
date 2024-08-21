import { Link, useNavigate } from 'react-router-dom'
import classes from './LoginForm.module.css'
import { useForm } from '@mantine/form'
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core'
import { AuthContext } from '../../contexts/auth.contexts'
import { useContext, useEffect } from 'react'

const LoginForm = () => {

    const { loginUser, loggedUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 2 ? 'Password must have at least 2 character' : null),
        }

    })

    const handleFormSubmit = userData => {
        loginUser(userData)

    }

    useEffect(() => {
        if (loggedUser) {
            navigate("/")
        }
    }, [loggedUser])

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Iron Assistant!
                </Title>
                <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                    <TextInput label="Email address" placeholder="hello@gmail.com" size="md" key={form.key('email')} {...form.getInputProps('email')} />
                    <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" key={form.key('password')} {...form.getInputProps('password')} />
                    <Checkbox label="Keep me logged in" mt="xl" size="md" />
                    <Button type="submit" fullWidth mt="xl" size="md">
                        Login
                    </Button>
                </form>
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

export default LoginForm