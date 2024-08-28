import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect
} from '@mantine/core'
import areasServices from '../../services/areas.services'
import { useEffect, useState } from 'react'
import devicesServices from '../../services/devices.services'
import UploaderPicture from '../UploaderPicture/UploaderPicture'

const NewAreaForm = () => {

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
            name: (value) => (value.length === 0 ? 'Require Name' : null),
        }
    })

    useEffect(() => {
        fetchDevices()
    }, [])

    const fetchDevices = () => {
        devicesServices
            .getAvailableDevices()
            .then((devices) => {
                const devicedata = devices.data.map(device => ({ value: `${device._id}`, label: `${device.name}` }))
                setDevices(devicedata)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = areaData => {

        areasServices
            .postNewArea(areaData)
            .then((area) => {
                area.data.devices.forEach(device => {
                    devicesServices
                        .putEditDeviceById(device._id, { "area": area.data._id })
                        .then()
                        .catch(err => console.log(err))
                })
                alert("Created Area")
            })
            .catch(err => console.log(err))
    }

    const updateForm = imageUrl => {
        form.setFieldValue('picture', imageUrl)
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
                <UploaderPicture updateForm={updateForm} />
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default NewAreaForm