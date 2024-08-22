import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect
} from '@mantine/core'
import AreasServices from '../../services/areas.services'
import { useEffect, useState } from 'react'
import devicesServices from '../../services/devices.services'
import DevicesServices from '../../services/devices.services'


const NewAreaForm = () => {

    const [Alldevices, setDevices] = useState([])
    const [loading, setLoading] = useState(true)

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            icon: '',
            floor: '',
            picture: ''
        },
        validate: {
            name: (value) => (value.length < 0 ? 'Require Name' : null),
            icon: (value) => (value.length < 0 ? 'Password must have at least 2 character' : null),
        }
    })

    useEffect(() => {
        fetchDevices()
    }, [])


    const fetchDevices = () => {
        DevicesServices
            .getAllDevices()
            .then((Devices) => {
                const deviceNames = Devices.data.map(nameDevice => nameDevice.name)
                setDevices(deviceNames)
            })
            .catch(err => console.log(err))
    }

    const handleFormSubmit = AreaData => {

        AreasServices
            .postNewArea(AreaData)
            .then(() => {
                alert("Created Area")
            })
            .catch(err => console.log(err))
    }

    return (
        <Fieldset legend="Device information">
            <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
                <TextInput label="Name" placeholder="Name" size="md" key={form.key('name')} {...form.getInputProps('name')} />
                <TextInput label="Icon" placeholder="Icon" size="md" key={form.key('icon')} {...form.getInputProps('icon')} />
                <TextInput label="Floor" placeholder="Floor" size="md" key={form.key('floor')} {...form.getInputProps('floor')} />
                {Alldevices.length > 0 ? (
                    <MultiSelect
                        label="Select devices"
                        placeholder="Pick devices"
                        data={Alldevices} // Usa los datos cargados
                        {...form.getInputProps('devicesSelected')}
                    />
                ) : (
                    <p>Loading devices...</p> // Mensaje o componente de carga
                )}
                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default NewAreaForm