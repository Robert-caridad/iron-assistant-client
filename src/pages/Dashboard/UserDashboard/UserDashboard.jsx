import { useState, useEffect, useContext } from 'react';
import { Container, Paper, Group, TextInput, Button, Title, Space, Avatar, Modal } from '@mantine/core';
import usersServices from '../../../services/users.services';
import { useForm } from '@mantine/form'
import { AuthContext } from '../../../contexts/auth.contexts';
import UploaderPicture from '../../../components/UploaderPicture/UploaderPicture';

const UserDashboard = () => {

    const { loggedUser } = useContext(AuthContext)

    const [avatarUrl, setAvatarUrl] = useState('');

    const [modalOpened, setModalOpened] = useState(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
            phone: '',
            picture: '',
            password: ''
        },
        validate: {
            name: (value) => (value.length === 0 ? 'Require Name' : null),
            email: (value) => (value.length === 0 ? 'Require Email' : null),
            phone: (value) => (value.length === 0 ? 'Require Phone' : null)
        }
    })

    useEffect(() => {
        fetchDevice()
    }, [])

    const fetchDevice = () => {
        usersServices
            .getUserById(loggedUser._id)
            .then(({ data }) => {
                form.setValues({
                    name: data.username || '',
                    email: data.email || '',
                    phone: data.phone || 'Not phone',
                })
                setAvatarUrl(data.picture || 'https://www.w3schools.com/w3images/avatar2.png')
            })
            .catch(err => console.log(err))
    }

    const handleSaveChanges = userData => {
        usersServices
            .editUserById(loggedUser._id, userData)
            .then(alert("Successful"))
            .catch(err => console.log(err))
    };

    const updateForm = imageUrl => {
        form.setFieldValue(setAvatarUrl(imageUrl))
    }

    return (
        <Container size="sm" my="xl">
            <Paper withBorder shadow="md" p="xl" radius="md">
                <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                    <Group position="center" mb="xl">

                        <Avatar size={100} radius="xl" src={avatarUrl} onClick={() => setModalOpened(true)} style={{ cursor: 'pointer' }} />

                        <Title order={2}>User Profile</Title>
                    </Group>
                    <TextInput
                        label="Name"
                        placeholder="Enter your name"
                        key={form.key('name')} {...form.getInputProps('name')}
                        mb="sm"
                    />
                    <TextInput
                        label="Email"
                        placeholder="Enter your email"
                        key={form.key('email')} {...form.getInputProps('email')}
                        mb="sm"
                    />
                    <TextInput
                        label="Phone"
                        placeholder="Enter your phone number"
                        key={form.key('phone')} {...form.getInputProps('phone')}
                        mb="sm"
                    />
                    <TextInput
                        type='password'
                        label="Password"
                        placeholder="Enter your password"
                        key={form.key('password')} {...form.getInputProps('password')}
                        mb="sm"
                    />
                    <Space h="md" />
                    <Group position="right">
                        <Button variant="outline" color="blue" onClick={handleSaveChanges}>
                            Save Changes
                        </Button>
                    </Group>
                </form>
            </Paper>
            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title="Upload New Avatar"
            >
                <UploaderPicture updateForm={updateForm} />
            </Modal>
        </Container>

    );
};

export default UserDashboard;
