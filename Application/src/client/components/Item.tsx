import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const Item = ({ title, index }) => {
  return (
    <Draggable draggableId={title} index={index}>
      {provided => (
        <div className="item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {title}
        </div>
      )}
    </Draggable>
  )
}

export default Item
