import { OnDrag, OnResize } from "react-moveable";

interface Position {
    top: string,
    left: string
}

interface Size {
    width: string,
    height: string
}

export interface MoveableCompProps {
    image?: string
    children: JSX.Element[]
    target: string;
    position: Position
    size: Size
    onDragHandler?: (args: OnDrag) => void
    onResizeHandler?: (args: OnResize) => void;
}