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

  const editNote = (id, newText) => {
    setNotes( prev => 
      prev.map(note => {
        if (note.id === id) {
          return {
            ...note,
            content: newText
          }
        } else {
          return note;
        }
      })
    )
  }

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  return (
    <>
      <header className="header section">
        <h1>Note It</h1>
      </header>
      <AddNote onAddNote={addNote}></AddNote>
      <NotesList notes={notes} onDelete={deleteNote} onEdit={editNote}></NotesList>
    </>
  )
}

export default App
