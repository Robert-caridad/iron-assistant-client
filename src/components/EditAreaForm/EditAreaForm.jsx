import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect
} from '@mantine/core'
import devicesServices from '../../services/devices.services'
import { useEffect, useState } from 'react'
import { useForm } from '@mantine/form'
import areasServices from '../../services/areas.services'
import UploaderPicture from '../UploaderPicture/UploaderPicture'

const EditAreaForm = ({ id, closeModalEdit }) => {

    const [availableDevices, setAvailableDevices] = useState([])
    const [allDevices, setAllDevices] = useState([])
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
            .then(async ({ data }) => {
                const selectedDevices = data.devices.map((device) => device._id)
                form.setValues({
                    name: data.name || '',
                    icon: data.icon || '',
                    floor: data.floor || '',
                    picture: data.picture || '',
                    selectedDevices
                })
                return {
                    'available': await devicesServices.getAvailableDevices(),
                    'all': await devicesServices.getAllDevices()
                }
            })
            .then(({ available, all }) => {
                const availableObj = available.data.map(device => ({
                    label: device.name,
                    value: device._id,
                }))

                const allObj = all.data.map(device => {
                    const isAvailable = availableObj.some((deviceAvailable) => deviceAvailable.value === device._id) || form.getValues().selectedDevices.includes(device._id)
                    if (isAvailable) {
                        return {
                            label: device.name,
                            value: device._id
                        }
                    } else {
                        return {
                            label: device.name,
                            value: device._id,
                            disabled: true
                        }
                    }
                })
                setLoading(false)
                setAllDevices(allObj)
            })
            .catch(err => console.error(err))
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
                        data={allDevices}
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