import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    Select
} from '@mantine/core'
import DevicesServices from '../../services/devices.services'
import { useEffect } from 'react'
import UploaderPicture from '../UploaderPicture/UploaderPicture'

const EditDeviceForm = ({ id, closeModalEdit }) => {

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
        fetchDevice()
    }, [])

    const fetchDevice = () => {
        DevicesServices
            .getDeviceById(id)
            .then(({ data }) => {
                form.setValues({
                    name: data.name || '',
                    icon: data.icon || '',
                    deviceType: data.deviceType || '',
                    logicFuction: data.logicFuction || '',
                    picture: data.picture || '',
                    brightness: data.brightness || null,
                    temperature: data.temperature || null,
                })
            })
            .catch(err => console.log(err))
    }

    const handleDeviceTypeChange = (value) => {
        form.setFieldValue('deviceType', value)

        if (value === 'light') {
            form.setFieldValue('brightness', 0)
            form.setFieldValue('temperature', null)
        } else if (value === 'thermostat') {
            form.setFieldValue('temperature', 0)
            form.setFieldValue('brightness', null)
        }
    }

    const handleFormSubmit = deviceData => {

        DevicesServices
            .putEditDeviceById(id, deviceData)
            .then(
                closeModalEdit()
            )
            .catch(err => console.log(err))
    }

    const updateForm = imageUrl => {
        form.setFieldValue('picture', imageUrl)
    }

    return (
        <Fieldset legend="Device information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <TextInput label="Picture" placeholder="Picture" size="md" key={form.key('picture')} {...form.getInputProps('picture')} />

                <Select
                    label="Select device type"
                    placeholder="Pick value"
                    data={['light', 'thermostat']}
                    key={form.key('deviceType')}
                    {...form.getInputProps('deviceType')}
                    onChange={handleDeviceTypeChange}
                />
                <UploaderPicture updateForm={updateForm} />
                <Button type="submit" fullWidth mt="xl" size="md">
                    Edit
                </Button>
            </form>
        </Fieldset>
    )
}

export default EditDeviceForm