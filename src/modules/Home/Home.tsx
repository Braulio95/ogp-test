import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import MoveableComp from "../../components/Moveable/MoveableComp";
import { Grid } from "@mui/material";
import { assignUniqueKeys } from "../../utils/assignUniqueKeys";
import { OnDrag, OnResize } from "react-moveable";

export const Home = () => {
  const target = "targetImage";
  const elements = [<img alt="" />];
  const [position, setPosition] = useState({ top: "20px", left: "30px" });
  const [size, setSize] = useState({ width: "", height: "" });

  //This handler allows the size changes
  const onResizeHandler = ({ target, width, height, drag }: OnResize) => {
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    //Sets the transform property wich allows to change visuals of an element like size or position
    target.style.transform = drag.transform;
  };
  //This handler allows the movement of some element
  const onDragHandler = ({ target, transform }: OnDrag) => {
    target.style.transform = transform;
  };

  useEffect(() => {
    setPosition({ top: "50px", left: "100px" });
    setSize({ width: "200px", height: "200px" });
  }, []);
  return (
    <Layout title="Main Page: Movable Image">
      <Grid item md={1}>
        <MoveableComp
          image="https://via.placeholder.com/200x200.png?text=Move+me!"
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
