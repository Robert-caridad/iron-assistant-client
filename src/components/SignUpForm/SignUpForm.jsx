import classes from './SignUpForm.module.css';
import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
} from '@mantine/core';

const SignUpForm = () => {

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome back to Mantine!
                </Title>

                <TextInput label="Username" placeholder="username" size="md" />
                <TextInput label="Email address" placeholder="hello@gmail.com" mt="md" size="md" />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
                <Button fullWidth mt="xl" size="md">
                    Register
                </Button>

                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    <Anchor href="#" fw={700} onClick={(event) => event.preventDefault()}>
                        Login
                    </Anchor>
                </Text>
            </Paper>
        </div >
    )
}

export default SignUpForm