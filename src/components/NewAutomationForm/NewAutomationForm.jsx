import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useState } from 'react'
import AutomationsServices from '../../services/automations.services'
import DevicesServices from '../../services/devices.services'

const NewAutomationForm = () => {

    const [alldevices, setDevices] = useState([])

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            picture: ''
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Require Name' : null),
        }
    })

    useEffect(() => {
        fetchDevices()
    }, [])

    const fetchDevices = () => {
        DevicesServices
            .getAllDevices()
            .then((devices) => {
                const devicedata = devices.data.map(device => ({ value: `${device._id}`, label: `${device.name}` }))
                setDevices(devicedata)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = automationsData => {
        AutomationsServices
            .postNewAutomations(automationsData)
            .then(() => {
                alert("Created automation")
            })
            .catch(err => console.log(err))
    }

    return (
        <Fieldset legend="Automation setup">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Picture" placeholder="Picture" size="md" key={form.key('picture')} {...form.getInputProps('picture')} />
                {alldevices.length > 0 ? (
                    <MultiSelect
                        label="Select devices"
                        placeholder="Pick devices"
                        data={alldevices}
                        {...form.getInputProps('devices')}
                    />
                ) :
                    (
                        <p>Loading devices...</p>
                    )}
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>

        </Fieldset>
    )
}

export default NewAutomationForm