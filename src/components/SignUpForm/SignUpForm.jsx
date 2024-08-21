import { Link, useNavigate } from 'react-router-dom';
import classes from './SignUpForm.module.css';
import { useForm } from '@mantine/form';
import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';
import authServices from "../../services/auth.services"

const SignUpForm = () => {

    const navigate = useNavigate()

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        validate: {
            username: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 2 ? 'Password must have at least 2 character' : null),
        }

    });

    const handleFormSubmit = userData => {
        authServices
            .signupUser(userData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome to Iron Assistant!
                </Title>
                <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                    <TextInput label="Username" placeholder="Username" size="md" key={form.key('username')} {...form.getInputProps('username')} />
                    <TextInput label="Email address" placeholder="hello@gmail.com" mt="md" size="md" key={form.key('email')} {...form.getInputProps('email')} />
                    <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" key={form.key('password')} {...form.getInputProps('password')} />
                    <Button type="submit" fullWidth mt="xl" size="md">
                        Register
                    </Button>
                </form>
                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    <Anchor fw={700} component={Link} to="/login">
                        Login
                    </Anchor>
                </Text>
            </Paper>
        </div >
    )
}

export default SignUpForm