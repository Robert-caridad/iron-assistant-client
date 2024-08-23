import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect
} from '@mantine/core'
import AreasServices from '../../services/areas.services'
import { useEffect, useState } from 'react'
import DevicesServices from '../../services/devices.services'

const NewAreaForm = () => {

    const [Alldevices, setDevices] = useState([])

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            icon: '',
            floor: '',
            picture: ''
        },
        validate: {
            name: (value) => (value.length === 0 ? 'Require Name' : null),
        }
    })

    useEffect(() => {
        fetchDevices()
    }, [])

    const fetchDevices = () => {
        DevicesServices
            .getAvailableDevices()
            .then((devices) => {
                const devicedata = devices.data.map(device => ({ value: `${device._id}`, label: `${device.name}` }))
                setDevices(devicedata)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = areaData => {

        AreasServices
            .postNewArea(areaData)
            .then((area) => {
                Alldevices.forEach(device => {
                    DevicesServices
                        .putEditDeviceById(device.value, { "area": area.data._id })
                })
                alert("Created Area")
            })
            .catch(err => console.log(err))
    }

    return (
        <Fieldset legend="Area information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <TextInput label="Floor" placeholder="Floor" size="md" key={form.key('floor')} {...form.getInputProps('floor')} />
                {Alldevices.length > 0 ? (
                    <MultiSelect
                        label="Select devices"
                        placeholder="Pick devices"
                        data={Alldevices}
                        {...form.getInputProps('devices')}
                    />
                ) : (
                    <p>Loading devices...</p>
                )}
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default NewAreaForm