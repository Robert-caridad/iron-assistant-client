import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { Link } from 'react-router-dom';

const HeroImageBackground = () => {

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Iron Assistant for{' '}
                    <Text component="span" inherit className={classes.highlight}>
                        any person
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Bringing smart home automation to everyone. Simplify your life with our easy-to-use home assistant app.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg" component={Link} to="/signup" mr={10}>
                        Get started
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Live demo
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroImageBackground