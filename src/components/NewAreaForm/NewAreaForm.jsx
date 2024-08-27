import { useForm } from '@mantine/form'
import {
    TextInput,
    Button,
    Fieldset,
    MultiSelect,
    useMantineTheme,
    rem,
    Group,
    Text
} from '@mantine/core'
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import areasServices from '../../services/areas.services'
import { useEffect, useState, useRef } from 'react'
import devicesServices from '../../services/devices.services'
import classes from './NewAreaForm.module.css';

const NewAreaForm = () => {
    const theme = useMantineTheme();
    const openRef = useRef(null)

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

        // TODO: RESOLVER TRANSACCION MULTIPLE DESDE LA API

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
                <div className={classes.wrapper}>
                    <Dropzone
                        openRef={openRef}
                        onDrop={() => { }}
                        className={classes.dropzone}
                        radius="md"
                        accept={[MIME_TYPES.pdf]}
                        maxSize={30 * 1024 ** 2}
                    >
                        <div style={{ pointerEvents: 'none' }}>
                            <Group justify="center">
                                <Dropzone.Accept>
                                    <IconDownload
                                        style={{ width: rem(50), height: rem(50) }}
                                        color={theme.colors.blue[6]}
                                        stroke={1.5}
                                    />
                                </Dropzone.Accept>
                                <Dropzone.Reject>
                                    <IconX
                                        style={{ width: rem(50), height: rem(50) }}
                                        color={theme.colors.red[6]}
                                        stroke={1.5}
                                    />
                                </Dropzone.Reject>
                                <Dropzone.Idle>
                                    <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
                                </Dropzone.Idle>
                            </Group>

                            <Text ta="center" fw={700} fz="lg" mt="xl">
                                <Dropzone.Accept>Drop files here</Dropzone.Accept>
                                <Dropzone.Reject>Pdf file less than 30mb</Dropzone.Reject>
                                <Dropzone.Idle>Upload resume</Dropzone.Idle>
                            </Text>
                            <Text ta="center" fz="sm" mt="xs" c="dimmed">
                                Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that
                                are less than 30mb in size.
                            </Text>
                        </div>
                    </Dropzone>

                    <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
                        Select files
                    </Button>
                </div>

                <Button type="submit" fullWidth mt="xl" size="md">
                    Create
                </Button>
            </form>
        </Fieldset>
    )
}

export default NewAreaForm