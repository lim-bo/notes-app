import { useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote/AddNote'
import NotesList from './components/NotesList/NotesList'
import { loadNotes, saveNotes } from './components/NotesList/notes_storage'

function App() {
  
  const [notes, setNotes] = useState(loadNotes);

  const addNote = (newNote) => {
    setNotes([...notes, { 
      id: crypto.randomUUID(), 
      content: newNote.content
    }]);
  }

  const deleteNote = (id) => {
    setNotes( prev =>
      prev.filter((value) => value.id !== id)
    );
  }

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <>
      <AddNote onAddNote={addNote}></AddNote>
      <NotesList notes={notes} onDelete={deleteNote}></NotesList>
    </>
  )
}

export default App
