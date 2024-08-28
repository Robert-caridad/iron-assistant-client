import cx from 'clsx'
import { Text, Button, Box, Image } from '@mantine/core'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './DevicesDetailList.module.css'
import { IconTrash } from '@tabler/icons-react'

const DevicesDetailList = ({ modalEdit, devicesData, handleOnDragEnd }) => {

    const handlerForEdit = (id) => {
        modalEdit(id)
    }

    const items = devicesData.map((item, index) => (
        <Draggable key={item._id} index={index} draggableId={item._id}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Image
                        radius="md"
                        h={150}
                        w={'auto'}
                        fit="contain"
                        src={item.picture}
                    />
                    <Text className={classes.symbol}></Text>
                    <div>
                        <Text mb={10}>{item.name}</Text>
                        <Text c="dimmed" size="sm" mb={10}>
                            Area: {item.area ? item.area.name : 'No Area Assigned'}
                        </Text>
                        <Text c="dimmed" size="sm" mb={10}>
                            Device Type: {item.deviceType || 'Not defined'}
                        </Text>
                        <Text c="dimmed" size="sm" mb={10}>
                            Created by: {item.ownerEmail || 'Not defined'}
                        </Text>
                        <Button variant="default" onClick={() => handlerForEdit(item._id)}>Edit</Button>
                    </div>
                </div>
            )}
        </Draggable>
    ))

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="dnd-list" direction="vertical">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {items}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="trash-bin">
                {(provided) => (
                    <Box
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={classes.item}
                    >
                        <IconTrash size={48} color="red" />
                        <Text>Drop here to delete</Text>
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default DevicesDetailList