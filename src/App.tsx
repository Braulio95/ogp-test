import React from "react";
import { useRef, useState } from "react";
import Moveable from "react-moveable";
import "./styles.css";

import "./App.css";

function App() {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="target" ref={targetRef}>
        <img
          width="200"
          height="200"
          src="https://via.placeholder.com/200x200.png?text=Move+me!"
          alt=""
        />
      </div>
      <Moveable
        target={targetRef}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        startDragRotate={0}
        throttleDragRotate={0}
        onDrag={(e) => {
          e.target.style.transform = e.transform;
        }}
      />
    </>
  );
}

export default App;
