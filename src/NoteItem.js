// NoteItem.js
import React from "react";
import "./NoteItem.css";

const NoteItem = ({ note, onDeleteNote }) => {
  return (
    <li className="note-item">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </li>
  );
};

export default NoteItem;
