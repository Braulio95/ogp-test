import React, { useRef, Children, cloneElement } from "react";
import Moveable from "react-moveable";
import { MoveableCompProps } from "../../types/MoveableCompProps";
/**
 * Wrapper component that gets an array of JSX elements and provides them with removeable and resizable actions
 *
 * @param children - Array of JSX objetcs
 * @param image - Link or path to an image to be redered (Optional)
 * @param target - Name of the class that will be added
 * @param position - Object with properties top and left to define the initial position
 * @param size - Object with properties width and height
 * @param onResizeHandler - Function to handle the size changes(Optional)
 * @param onResizeHandler - Function to handle the position changes(Optional)
 */
const MoveableComp = ({
  children,
  image,
  target,
  position,
  size,
  onDragHandler,
  onResizeHandler,
}: MoveableCompProps) => {
  const moveableRef = useRef<Moveable>(null);

  const addClassListToElements = () => {
    return Children.map(children, (child) => {
      const childStyle = {
        ...child.props.style,
        ...position,
        ...size,
      };
      const childWithProps = cloneElement(child, {
        className: `${target}`,
        style: childStyle,
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
        target={`.${target}`}
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
        onDrag={onDragHandler}
        onResize={onResizeHandler}
      />
    </div>
  );
};

export default MoveableComp;
