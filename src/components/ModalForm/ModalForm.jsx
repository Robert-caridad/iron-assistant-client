import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useEffect, useState } from 'react';

const ModalForm = ({ name, form }) => {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Button variant="filled" onClick={open}>New {name}</Button>
            <Modal opened={opened} onClose={close} title={`New ${name}`}>
                {form}
            </Modal>
        </>
    )
}

export default ModalForm