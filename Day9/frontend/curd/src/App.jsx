import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [note, setNote] = useState([]);
  function getData() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNote(res.data.note);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  function submitHandler(e) {
    e.preventDefault();
   
    const { title, desc } = e.target.elements;
    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        desc: desc.value,
      })
      .then((res) => {
        console.log(res.data);
        getData();
 
      });
  }

  function deleteNote(noteId) {
    console.log(noteId);
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      getData();
    });
  }
  function updateNote(noteId) {
    const title = prompt("Enter New Title");
    const desc = prompt("Enter New Description");

    axios
      .patch(`http://localhost:3000/api/notes/` + noteId, {
        title,
        desc,
      })
      .then((res) => {
        console.log(res.data);
        getData();
      });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="title" placeholder="Enter Title" />
        <input type="text" name="desc" placeholder="Enter  Desc" />
        <button>Create User</button>
      </form>

      <div className="notes">
        {note.map((noteData) => {
          return (
            <div className="note">
              <h1>{noteData.title}</h1>
              <p>{noteData.desc}</p>
              <div className="btn">
                <button
                  onClick={() => {
                    deleteNote(noteData._id);
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    updateNote(noteData._id);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
