import React from "react";

const TaskItem = ({color,status,title}) => {
  return (
    <>
     <h3 style={{color}}>{title}-{status}</h3>
    </>
  );
};

export { TaskItem };
