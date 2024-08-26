import cx from 'clsx'
import { Button, Text } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './AutomationsDetailList.module.css'
import { useEffect, useState } from "react"
import AutomationsServices from '../../services/automations.services'

const AutomationsDetailList = () => {
    const [automationsData, setAutomations] = useState([])
    // const [state, handlers] = useListState(automationsData)

    useEffect(() => {
        fetchAutomations()
    }, [])

    const fetchAutomations = () => {
        AutomationsServices
            .getAutomations()
            .then(({ data }) => setAutomations(data))
            .catch(err => console.log(err))
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
                    </div>
                </div>
            )}
        </Draggable>
    ))

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
    )
}

export default AutomationsDetailList