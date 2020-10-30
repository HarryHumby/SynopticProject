import React from "react";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ col: { list, id, name } }) => {
  console.log('list', list);
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="list-column">
          <h2 className="list-column-title">{name}</h2>
          <div className="list-column-body" {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((audioFile, index) => {
              return <Item key={audioFile._id} title={audioFile.title} index={index} />
            })}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
