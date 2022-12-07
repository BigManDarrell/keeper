import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = (prop) => {
  return (
    <div className="note">
      <h1>{prop.title}</h1>
      <p>{prop.content}</p>
      <button onClick={() => prop.onClick(prop.index)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
