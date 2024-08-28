import {
    Button,
    FileInput,
    Text,
    Center,
    Box,
    SimpleGrid,
    Image
} from '@mantine/core'
import { useState } from 'react'
import uploadServices from '../../services/upload.services';

const UploaderPicture = ({ updateForm }) => {

    const [picture, setpicture] = useState([])
    const [uploadImage, setuploadImage] = useState('')

    const previews = picture.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)} />;
    });

    const handleFileUpload = e => {
        setuploadImage('Upload image...')
        const formData = new FormData()
        formData.append('imageData', e[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                const { cloudinary_url: imageUrl } = data
                updateForm(imageUrl)
                setuploadImage('Upload Done')
            })
            .catch(err => {
                console.log(err)
                setuploadImage('Upload fail')
            })
    }

    return (
        <>
            <FileInput
                mt="xl"
                label="Upload image"
                placeholder="Click here"
                multiple value={picture} onChange={setpicture}
            />

            <Button fullWidth mt="xl" size="xs" onClick={() => { handleFileUpload(picture) }}>
                Send
            </Button>
            <Box>
                <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">

                    <Text
                        size="xl"
                        fw={900}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
                        {uploadImage}
                    </Text>
                </Center>
                <SimpleGrid mt={previews.length > 0 ? 'xl' : 0}>
                    {previews}
                </SimpleGrid>
            </Box>
        </>
    )
}

export default UploaderPicture
