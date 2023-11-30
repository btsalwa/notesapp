// App.js
import React, { useState } from "react";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);

  

  const addNote = (newNote) => {
    const newNoteWithId = {
      ...newNote,
      id: Date.now(),
    };

    setNotes([...notes, newNoteWithId]);
  };

  const deleteNote = (noteId) => {
    const deletedNote = notes.find((note) => note.id === noteId);
    const updatedNotes = notes.filter((note) => note.id !== noteId);

    setNotes(updatedNotes);
    setDeletedNotes([...deletedNotes, deletedNote]);
  };

  const restoreNote = (noteId) => {
    const restoredNote = deletedNotes.find((note) => note.id === noteId);
    const updatedDeletedNotes = deletedNotes.filter(
      (note) => note.id !== noteId
    );

    setDeletedNotes(updatedDeletedNotes);
    setNotes([...notes, restoredNote]);
  };

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <NoteForm onAddNote={addNote} />
      <div className="notes-container">
        <div>
          <h2>Active Notes</h2>
          <NoteList notes={notes} onDeleteNote={deleteNote} />
        </div>
        <div>
          <h2>Deleted Notes</h2>
          <NoteList notes={deletedNotes} onDeleteNote={restoreNote} />
        </div>
      </div>
    </div>
  );
};

export default App;
