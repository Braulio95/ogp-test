import React from "react";

export const assignUniqueKeys = (elementArray: JSX.Element[]) => {
    return elementArray.map((element, index) => {
        return React.cloneElement(element, {
            key: `element-${index}`,
        });
    });
};