import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [note, setNote] = useState([]);
  axios.get("http://localhost:3000/notes").then((res) => {
    setNote(res.data.noteData);
  });
  return (
    <div>
      <div className="notes">
        {note.map((note, idx) => {
          return (
            <div className="note" key={idx}>
              <h1>{note.title}</h1>
              <p> {note.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
