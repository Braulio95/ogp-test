import React, { useRef, Children, cloneElement } from "react";
import Moveable from "react-moveable";
import { MoveableCompProps } from "../../types/MoveableCompProps";

const MoveableComp = ({ children, image }: MoveableCompProps) => {
  const moveableRef = useRef<Moveable>(null);

  const addClassListToElements = () => {
    return Children.map(children, (child, index) => {
      // If there's no key it will assing one
      const childWithProps = cloneElement(child, {
        className: `target`,
        src: child.type === "img" ? image : undefined,
      });

      return childWithProps;
    });
  };

  const isGroupable = () => {
    //checks if the input array has more than one element and if so it will be set to true, if not it will go to false
    return Children.count(children) > 1;
  };

  return (
    <div className="container" style={{ width: "100%", height: "80vh" }}>
      {addClassListToElements().map((child) => child)}
      <Moveable
        ref={moveableRef}
        //This prop allows to manage a lot of elements with a single moveable object
        individualGroupable={isGroupable()}
        //This prop links the moveable component to all elements with the class target
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
