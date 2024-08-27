import DevicesDetailList from '../../../components/DevicesDetailList/DevicesDetailList';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewDeviceForm from '../../../components/NewDeviceForm/NewDeviceForm';
import { useDisclosure } from '@mantine/hooks';
import { Group, Modal } from '@mantine/core';
import EditDeviceForm from '../../../components/EditDeviceForm/EditDeviceForm';
import { useEffect, useState } from 'react'
import DevicesServices from './../../../services/devices.services'
import { useListState } from '@mantine/hooks'

const DevicesPageDashboard = () => {

    const [devicesData, setDevicesData] = useState([])
    const [state, handlers] = useListState(devicesData)

    const [opened, { open, close }] = useDisclosure(false);
    const [idDevice, setIdDevice] = useState('')

    useEffect(() => {
        fetchDevices()
    }, [])

    const fetchDevices = () => {
        DevicesServices
            .getAllDevices()
            .then(({ data }) => {
                setDevicesData(data)
                handlers.setState(data)
            })
            .catch(err => console.log(err))
    }

    const handleOnDragEnd = (result) => {
        const { destination, source } = result

        if (!destination) {
            return
        }

        if (destination.droppableId === 'trash-bin') {
            const deviceId = devicesData[source.index]._id

            DevicesServices
                .deleteDeviceById(deviceId)
                .then(() => {
                    fetchDevices()
                })
                .catch(err => console.log(err))
        } else {
            handlers.reorder({ from: source.index, to: destination.index })
        }
    }

    const modalEdit = (id) => {
        setIdDevice(id)
        open()
    }

    const closeModalEdit = () => {
        fetchDevices()
        close()
    }

    return (
        <div>
            <p>Device Page List</p>
            <Group pb={20} >
                <ModalForm name="Devices" form={<NewDeviceForm />} />
            </Group>
            <DevicesDetailList modalEdit={modalEdit} devicesData={devicesData} handleOnDragEnd={handleOnDragEnd} />
            <Modal opened={opened} onClose={close} title={`Edit`}>
                <EditDeviceForm id={idDevice} closeModalEdit={closeModalEdit} />
            </Modal>
        </div>
    )
}

export default DevicesPageDashboard