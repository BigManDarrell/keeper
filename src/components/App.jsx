import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((n, i) => (
        <Note key={i} title={n.title} content={n.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
