import { useNavigate } from 'react-router-dom'
import { useForm } from '@mantine/form'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
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
        <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
            <TextInput label="Email address" placeholder="hello@gmail.com" size="md" key={form.key('email')} {...form.getInputProps('email')} />
            <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" key={form.key('password')} {...form.getInputProps('password')} />
            <Checkbox label="Keep me logged in" mt="xl" size="md" />
            <Button type="submit" fullWidth mt="xl" size="md">
                Login
            </Button>
        </form>
    )
}

export default LoginForm