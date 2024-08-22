import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    Select
} from '@mantine/core'
import DevicesServices from '../../services/devices.services'
const NewDeviceForm = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            icon: '',
            deviceType: '',
            logicFuction: '',
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Require Name' : null),
            icon: (value) => (value.length < 0 ? 'Password must have at least 2 character' : null),
        }
    })

    const handleFormSubmit = deviceData => {

        DevicesServices
            .postNewDevice(deviceData)
            .then(() => {
                alert("Created")
            })
            .catch(err => console.log(err))
    }

    return (
        <Fieldset legend="Device information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <Select
                    label="Select device type"
                    placeholder="Pick value"
                    data={['light', 'thermostat']}
                    key={form.key('deviceType')}
                    {...form.getInputProps('deviceType')}
                /> <Select
                    label="Select fuction"
                    placeholder="Pick value"
                    data={['On/Off', 'Dimmer']}
                    key={form.key('logicFuction')}
                    {...form.getInputProps('logicFuction')}
                />
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default NewDeviceForm