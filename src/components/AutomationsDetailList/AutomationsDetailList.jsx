import cx from 'clsx'
import { Text, Button, Box } from '@mantine/core'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './AutomationsDetailList.module.css'
import { IconTrash } from '@tabler/icons-react'

const AutomationsDetailList = ({ modalEdit, automationsData, handleOnDragEnd }) => {

    const handlerForEdit = (id) => {
        modalEdit(id)
    }

    const items = automationsData.map((item, index) => (
        <Draggable key={item.name} index={index} draggableId={item.name}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Text className={classes.symbol}>{ }</Text>
                    <div>
                        <Text>{item.name}</Text>
                        <Text c="dimmed" size="sm">
                            Devices: {item.devices.length} • Funtion: <Button>On/Off </Button>
                        </Text>
                        <Button variant="default" onClick={() => handlerForEdit(item._id)}>Edit</Button>
                    </div>
                </div>
            )}
        </Draggable>
    ))

    return (
        <DragDropContext
            onDragEnd={handleOnDragEnd}
        >
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
                        style={{
                            marginTop: '20px',
                            padding: '20px',
                            backgroundColor: '#f5f5f5',
                            textAlign: 'center',
                            borderRadius: '8px',
                            border: '2px dashed #ccc',
                        }}
                    >
                        <IconTrash size={48} color="red" />
                        <Text>Drop here to delete</Text>
                    </Box>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default AutomationsDetailList