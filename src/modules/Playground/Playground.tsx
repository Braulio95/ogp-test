import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MoveableComp from "../../components/Moveable/MoveableComp";
import { Grid } from "@mui/material";
import { assignUniqueKeys } from "../../utils/assignUniqueKeys";
import { OnDrag, OnResize } from "react-moveable";

export const Playground = () => {
  const target = "target";
  const [position, setPosition] = useState({ top: "", left: "" });
  const [size, setSize] = useState({ width: "", height: "" });
  const elements = [
    <div
      style={{
        position: "absolute",
        lineHeight: "100px",
        textAlign: "center",
        background: "#9caf88",
        color: "#333",
        fontWeight: "bold",
        boxSizing: "border-box",
        borderRadius: "1rem",
      }}
    >
      Target 1
    </div>,
    <div
      style={{
        position: "absolute",
        lineHeight: "100px",
        textAlign: "center",
        background: "#CBD5C0",
        color: "#333",
        fontWeight: "bold",
        boxSizing: "border-box",
        borderRadius: "1rem",
      }}
    >
      Target 2
    </div>,
    <div
      style={{
        position: "absolute",
        lineHeight: "100px",
        textAlign: "center",
        background: "#819171",
        color: "#333",
        fontWeight: "bold",
        boxSizing: "border-box",
        borderRadius: "10rem",
      }}
    >
      Target 3
    </div>,
  ];

  const onResizeHandler = ({ target, width, height, drag }: OnResize) => {
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.transform = drag.transform;
  };

  const onDragHandler = ({ target, transform }: OnDrag) => {
    target.style.transform = transform;
  };

  useEffect(() => {
    setPosition({ top: "200px", left: "200px" });
    setSize({ width: "300px", height: "300px" });
  }, [size, position]);

  return (
    <Layout title="Playground: Other cases testing">
      <Grid item md={1}>
        <MoveableComp
          children={assignUniqueKeys(elements)}
          target={target}
          position={position}
          size={size}
          onResizeHandler={onResizeHandler}
          onDragHandler={onDragHandler}
        />
      </Grid>
    </Layout>
  );
};
