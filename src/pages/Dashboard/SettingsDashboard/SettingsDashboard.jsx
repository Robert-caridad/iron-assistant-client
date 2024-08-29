import React, { useState } from 'react';
import { Table, Button, Modal, TextInput, Group, Space } from '@mantine/core';

const SettingsDashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ]);

    const [opened, setOpened] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = () => {
        const newUser = { id: users.length + 1, name, email };
        setUsers([...users, newUser]);
        setName('');
        setEmail('');
        setOpened(false);
    };

    const handleEditUser = () => {
        setUsers(users.map(user => (user.id === editingUser.id ? { ...user, name, email } : user)));
        setName('');
        setEmail('');
        setOpened(false);
        setEditingUser(null);
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleOpenModal = (user) => {
        setOpened(true);
        if (user) {
            setEditingUser(user);
            setName(user.name);
            setEmail(user.email);
        } else {
            setName('');
            setEmail('');
        }
    };

    return (
        <div>
            <h1>Users Manager</h1>

            <Group position="right">
                <Button onClick={() => handleOpenModal(null)}>Add User</Button>
            </Group>

            <Space h="md" />

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Group spacing="xs">
                                    <Button size="xs" onClick={() => handleOpenModal(user)}>Edit</Button>
                                    <Button size="xs" color="red" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                                </Group>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={editingUser ? 'Edit User' : 'Add User'}
            >
                <TextInput
                    label="Name"
                    placeholder="Enter user name"
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                    required
                />
                <TextInput
                    label="Email"
                    placeholder="Enter user email"
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    required
                />
                <Space h="md" />
                <Group position="right">
                    <Button onClick={editingUser ? handleEditUser : handleAddUser}>
                        {editingUser ? 'Save Changes' : 'Add User'}
                    </Button>
                </Group>
            </Modal>
        </div>
    );
};

export default SettingsDashboard;
