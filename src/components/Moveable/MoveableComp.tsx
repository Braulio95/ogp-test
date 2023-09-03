import React, { useRef } from "react";
import Moveable from "react-moveable";
import { MoveableCompProps } from "../../types/MoveableCompProps";

const MoveableComp = ({ children }: MoveableCompProps) => {
  const moveableRef = useRef<Moveable>(null);

  const addClassListToElements = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        className: `target`,
        key: index, // Unique keys
      });
    });
  };
  return (
    <div className="container">
      {addClassListToElements().map((child) => {
        return <div>{child}</div>;
      })}
      <Moveable
        ref={moveableRef}
        individualGroupable={true}
        target={".target"}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={true}
        startDragRotate={0}
        throttleDragRotate={0}
        resizable={true}
        keepRatio={false}
        throttleResize={1}
        renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
        rotatable={true}
        throttleRotate={0}
        rotationPosition={"top"}
        onDrag={({ target, transform }) => {
          target.style.transform = transform;
        }}
        onResize={({ target, width, height, drag }) => {
          target.style.width = `${width}px`;
          target.style.height = `${height}px`;
          target.style.transform = drag.transform;
        }}
      />
    </div>
  );
};

export default MoveableComp;
