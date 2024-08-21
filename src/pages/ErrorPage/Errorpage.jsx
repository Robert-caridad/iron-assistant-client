import { Container, Title, Text, Button, SimpleGrid } from '@mantine/core'
import classes from './ErrorPage.module.css'
import Image404 from '../../components/Image404/image404'
import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <Container className={classes.root}>
            <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
                <Image404 />
                <div>
                    <Title className={classes.title}>Something is not right...</Title>
                    <Text c="dimmed" size="lg">
                        Page you are trying to open does not exist. You may have mistyped the address, or the
                        page has been moved to another URL. If you think this is an error contact support.
                    </Text>
                    <Button component={Link} to="/" variant="outline" size="md" mt="xl" className={classes.control}>
                        Get back to home page
                    </Button>
                </div>
            </SimpleGrid>
        </Container>
    )
}

export default ErrorPage