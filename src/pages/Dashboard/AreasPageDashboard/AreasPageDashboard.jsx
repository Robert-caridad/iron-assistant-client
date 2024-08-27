import AreasDetailList from '../../../components/AreasDetailList/AreasDetailList';
import ModalForm from '../../../components/ModalForm/ModalForm';
import NewAreaForm from '../../../components/NewAreaForm/NewAreaForm';
import { useEffect, useState } from "react"
import { useListState } from '@mantine/hooks'
import areasServices from '../../../services/areas.services';
import EditAreaForm from '../../../components/EditAreaForm/EditAreaForm';
import { useDisclosure } from '@mantine/hooks';
import { Group, Modal } from '@mantine/core';

const AreasPageDashboard = () => {

    const [areasData, setAreasData] = useState([])
    const [state, handlers] = useListState(areasData)

    const [opened, { open, close }] = useDisclosure(false);
    const [idArea, setIdArea] = useState('')

    useEffect(() => {
        fetchAreas()
    }, [])

    const modalEdit = (id) => {
        setIdArea(id)
        open()
    }

    const closeModalEdit = () => {
        fetchAreas()
        close()
    }

    const fetchAreas = () => {
        areasServices
            .getAreas()
            .then(({ data }) => { setAreasData(data) })
            .catch(err => console.log(err))
    }

    const handleOnDragEnd = (result) => {
        const { destination, source } = result

        if (!destination) {
            return
        }

        if (destination.droppableId === 'trash-bin') {
            const areaId = areasData[source.index]._id

            areasServices
                .deleteAreaById(areaId)
                .then(() => {
                    fetchAreas()
                })
                .catch(err => console.log(err))
        } else {
            handlers.reorder({ from: source.index, to: destination.index })
        }
    }

    return (
        <div>
            <p>Areas Page List</p>
            <Group pb={20}>
                <ModalForm name="Area" form={<NewAreaForm />} />
            </Group>
            <AreasDetailList modalEdit={modalEdit} areasData={areasData} handleOnDragEnd={handleOnDragEnd} />
            <Modal opened={opened} onClose={close} title={`Edit`}>
                <EditAreaForm id={idArea} closeModalEdit={closeModalEdit} />
            </Modal>
        </div>
    )
}

export default AreasPageDashboard