import cx from 'clsx';
import { Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './CardsDeviceDetail.module.css';
import { useEffect, useState } from 'react';
import DevicesServices from '../../services/devices.services'

const CardsDeviceDetail = () => {
    const [devicesData, setDevicesData] = useState([])
    const [state, handlers] = useListState(devicesData);

    useEffect(() => {
        fetchDevices()
    }, [])

    const fetchDevices = () => {
        DevicesServices
            .getAllDevices()
            .then((devices) => {
                const devicesdata = devices.data.map(device => ({ value: `${device._id}`, name: `${device.name}`, area: `${device.area}` }))
                setDevicesData(devicesdata)
            })
            .catch(err => console.log(err))
    }

    const items = devicesData.map((item, index) => (
        <Draggable key={item.name} index={index} draggableId={item.name}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Text className={classes.symbol}></Text>
                    <div>
                        <Text>{item.name}</Text>
                        <Text c="dimmed" size="sm">
                            Area: {item.area} • Value: {item.value}
                        </Text>
                    </div>
                </div>
            )}
        </Draggable>
    ));

    return (
        <DragDropContext
            onDragEnd={({ destination, source }) =>
                handlers.reorder({ from: source.index, to: destination?.index || 0 })
            }
        >
            <Droppable droppableId="dnd-list" direction="vertical">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {items}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default CardsDeviceDetail