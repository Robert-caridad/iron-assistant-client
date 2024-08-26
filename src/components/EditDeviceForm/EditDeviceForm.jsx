import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    Select
} from '@mantine/core'
import DevicesServices from '../../services/devices.services'
import { useState } from 'react'
import { useParams } from 'react-router-dom';


const EditDeviceForm = ({ _id }) => {

    const [device, setDevice] = useState()

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            icon: '',
            deviceType: '',
            logicFuction: '',
            brightness: null,
            temperature: null,
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Require Name' : null),
            deviceType: (value) => value === '' ? 'Device type is required' : null
        }
    })

    useEffect(() => {
        fetchDevice()
    }, [])

    const fetchDevice = () => {
        DevicesServices
            .getDeviceById(_id)
            .then(({ data }) => {
                setDevice(data)
            })
            .catch(err => console.log(err))
    }

    const handleDeviceTypeChange = (value) => {
        form.setFieldValue('deviceType', value);

        if (value === 'light') {
            form.setFieldValue('brightness', 0);
            form.setFieldValue('temperature', null);
        } else if (value === 'thermostat') {
            form.setFieldValue('temperature', 0);
            form.setFieldValue('brightness', null);
        }
    }

    const handleFormSubmit = deviceData => {

        DevicesServices
            .putEditDeviceById(_id, deviceData)
            .then(
                alert("update")
            )
            .catch(err => console.log(err))
    }

    return (
        <Fieldset legend="Device information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" value={device.name} key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <Select
                    label="Select device type"
                    placeholder="Pick value"
                    data={['light', 'thermostat']}
                    key={form.key('deviceType')}
                    {...form.getInputProps('deviceType')}
                    onChange={handleDeviceTypeChange}
                />
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default EditDeviceForm