import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea
        onSubmit={(note, event) => {
          setNotes((prevValue) => [...prevValue, note]);
          event.preventDefault();
        }}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          index={index}
          title={note.title}
          content={note.content}
          onClick={(rmIndex) =>
            setNotes((prevValue) => prevValue.filter((e, i) => i != rmIndex))
          }
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
