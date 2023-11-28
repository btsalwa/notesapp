// NoteForm.js
import React, { useState } from "react";
import "./NoteForm.css";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [priority, setPriority] = useState("normal");

  const handleAddNote = () => {
    onAddNote({
      title,
      content,
      priority,
    });

    setTitle("");
    setContent("");
    setPriority("normal");
  };

  return (
    <div className="note-form-container">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="important">Important</option>
        <option value="urgent">Urgent</option>
      </select>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;
