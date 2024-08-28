import { useEffect, useState } from 'react'
import AutomationsDetailList from '../../../components/AutomationsDetailList/AutomationsDetailList'
import ModalForm from '../../../components/ModalForm/ModalForm'
import NewAutomationForm from '../../../components/NewAutomationForm/NewAutomationForm'
import { useDisclosure, useListState } from '@mantine/hooks'
import { Group, Modal } from '@mantine/core'
import EditAutomationForm from '../../../components/EditAutomationForm/EditAutomationForm'
import automationsServices from '../../../services/automations.services'

const AutomationsPageDashboard = () => {

    const [automationsData, setautomationsData] = useState([])
    const [state, handlers] = useListState(automationsData)

    const [opened, { open, close }] = useDisclosure(false)
    const [idAutomation, setIdAutomation] = useState('')

    useEffect(() => {
        fetchAutomations()
    }, [])

    const modalEdit = (id) => {
        setIdAutomation(id)
        open()
    }

    const closeModalEdit = () => {
        fetchAutomations()
        close()
    }

    const fetchAutomations = () => {
        automationsServices
            .getAutomations()
            .then(({ data }) => setautomationsData(data))
            .catch(err => console.log(err))
    }

    const handleOnDragEnd = ({ destination, source }) => {

        if (!destination) {
            return
        }

        if (destination.droppableId === 'trash-bin') {
            const automationId = automationsData[source.index]._id

            automationsServices
                .deleteAutomationsById(automationId)
                .then(() => {
                    fetchAutomations()
                })
                .catch(err => console.log(err))
        } else {
            handlers.reorder({ from: source.index, to: destination.index })
        }
    }

    return (
        <div>
            <p>Automation Page List</p>
            <Group pb={20}>
                <ModalForm name="Automation" form={<NewAutomationForm />} />
            </Group>
            <AutomationsDetailList modalEdit={modalEdit} automationsData={automationsData} handleOnDragEnd={handleOnDragEnd} />
            <Modal opened={opened} onClose={close} title={`Edit`}>
                <EditAutomationForm id={idAutomation} closeModalEdit={closeModalEdit} />
            </Modal>
        </div>
    )
}

export default AutomationsPageDashboard