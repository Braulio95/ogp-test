import React from "react";
import { useRef } from "react";
import Moveable from "react-moveable";
import "./styles.css";

import "./App.css";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);

  return (
    <div className="root">
      <img
        src="https://via.placeholder.com/200x200.png?text=Move+me!"
        className="target"
        alt=""
      />

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
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
        onResize={(e) => {
          e.target.style.width = `${e.width}px`;
          e.target.style.height = `${e.height}px`;
          e.target.style.transform = e.drag.transform;
        }}
        onRotate={(e) => {
          e.target.style.transform = e.drag.transform;
        }}
      />
    </div>
  );
}

export default App;
