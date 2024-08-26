import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    Select,
    MultiSelect
} from '@mantine/core'
import devicesServices from '../../services/devices.services'
import { useEffect, useState } from 'react'
import areasServices from '../../services/areas.services'

const EditAreaForm = ({ id, closeModalEdit }) => {

    const [alldevices, setDevices] = useState([])

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            icon: '',
            floor: '',
            picture: '',
            selectedDevices: []
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Require Name' : null),
            deviceType: (value) => value === '' ? 'Device type is required' : null
        }
    })

    useEffect(() => {
        fetchArea()
    }, [])


    const fetchArea = () => {
        areasServices
            .getAreaById(id)
            .then(({ data }) => {
                const selectedDeviceIds = data.devices.map(device => device._id);
                console.log(data.icon)
                form.setValues({
                    name: data.name || '',
                    icon: data.icon || '',
                    floor: data.floor || '',
                    selectedDevices: selectedDeviceIds
                })
                devicesServices
                    .getAvailableDevices()
                    .then((devices) => {
                        const devicedata = devices.data.map(device => ({ value: `${device._id}`, label: `${device.name}` }))
                        setDevices(devicedata)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }

    const handleFormSubmit = areaData => {
        areasServices
            .putEditAreaById(id, areaData)
            .then(closeModalEdit())
            .catch(err => console.log(err))
    }

    return (
        <Fieldset legend="Area information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <TextInput label="Floor" placeholder="Floor" size="md" key={form.key('floor')} {...form.getInputProps('floor')} />
                {alldevices.length > 0 ? (
                    <MultiSelect
                        label="Select devices"
                        placeholder="Pick devices"
                        data={alldevices}
                        {...form.getInputProps('selectedDevices')}
                    />
                ) : (
                    <p>Loading devices...</p>
                )}
                <Button type="submit" fullWidth mt="xl" size="md">
                    Edit
                </Button>
            </form>
        </Fieldset>
    )
}

export default EditAreaForm