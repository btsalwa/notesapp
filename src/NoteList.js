// NoteList.js
import React from "react";
import "./NoteList.css";

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <ul className="note-list">
      {notes.map((note) => (
        <li key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>Priority: {note.priority}</p>
          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
