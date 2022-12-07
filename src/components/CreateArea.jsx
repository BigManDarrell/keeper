import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

const CreateArea = (prop) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpand, setIsExpand] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          prop.onSubmit(note, event);
          setNote({ title: "", content: "" });
        }}
      >
        {isExpand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onClick={() => setIsExpand(true)}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={isExpand}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
