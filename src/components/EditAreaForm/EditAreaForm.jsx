import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect
} from '@mantine/core'
import devicesServices from '../../services/devices.services'
import { useEffect, useState } from 'react'
import areasServices from '../../services/areas.services'
import UploaderPicture from '../UploaderPicture/UploaderPicture'

const EditAreaForm = ({ id, closeModalEdit }) => {

    const [alldevices, setDevices] = useState([])
    const [loading, setLoading] = useState(true)

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
                const selectedDeviceIds = data.devices.map(device => device._id)
                form.setValues({
                    name: data.name || '',
                    icon: data.icon || '',
                    floor: data.floor || '',
                    picture: data.picture || '',
                    selectedDevices: selectedDeviceIds
                })
                return devicesServices.getAvailableDevices()
            })
            .then((devicesResponse) => {
                const devicedata = devicesResponse.data.map(device => ({
                    label: device.name,
                    value: device._id,
                }))
                setDevices(devicedata)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = areaData => {
        areasServices
            .putEditAreaById(id, areaData)
            .then(closeModalEdit())
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
                <TextInput label="Picture" placeholder="Picture" size="md" key={form.key('picture')} {...form.getInputProps('picture')} />
                {loading ? (<p>Loading devices...</p>
                ) : (
                    <MultiSelect
                        label="Select devices"
                        placeholder="Pick devices"
                        data={alldevices}

                        {...form.getInputProps('selectedDevices')}
                    />
                )}
                <UploaderPicture updateForm={updateForm} />
                <Button type="submit" fullWidth mt="xl" size="md">
                    Edit
                </Button>
            </form>
        </Fieldset>
    )
}

export default EditAreaForm