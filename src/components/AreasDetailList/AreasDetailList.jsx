import cx from 'clsx'
import { Text } from '@mantine/core'
import { useListState } from '@mantine/hooks'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import classes from './AreasDetailList.module.css'
import { useEffect, useState } from "react"
import AreasServices from '../../services/areas.services'

const AreasDetailList = () => {
    const [areasData, setAreasData] = useState([])
    const [state, handlers] = useListState(areasData)

    useEffect(() => {
        fetchAreas()
    }, [])

    const fetchAreas = () => {
        AreasServices
            .getAreas()
            .then(({ data }) => { setAreasData(data) })
            .catch(err => console.log(err))
    }

    const items = areasData.map((item, index) => (
        <Draggable key={item.name} index={index} draggableId={item.name}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Text className={classes.symbol}>{item.symbol}</Text>
                    <div>
                        <Text>{item.name}</Text>
                        <Text c="dimmed" size="sm">
                            Position: {item.name} • Mass: {item.name}
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

export default AreasDetailList