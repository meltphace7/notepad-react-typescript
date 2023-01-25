import React, { useState } from 'react';
import AddNote from './components/AddNote'
import Body from './components/Body'
import NoteList from './components/NoteList'
import Note from './models/Note'


function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNoteHandler = (title: string, text:string) => {
    const newNote = new Note(title, text);
    setNotes(prevNotes => {
      return prevNotes.concat(newNote)
    })
  }

  return (
    <div className="App">
      <AddNote onAddNote={addNoteHandler} />
      <Body noteList={notes} />
    </div>
  );
}

export default App;
