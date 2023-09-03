import React, { useRef } from "react";
import Moveable from "react-moveable";
import { MoveableCompProps } from "../../types/MoveableCompProps";

const MoveableComp = ({ image }: MoveableCompProps) => {
  const moveableRef = useRef<Moveable>(null);
  return (
    <div className="root">
      <img src={image} className="target" alt="" />

      <Moveable
        ref={moveableRef}
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
          console.log(width);
          target.style.transform = drag.transform;
        }}
      />
    </div>
  );
};

export default MoveableComp;
