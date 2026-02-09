import { useCallback, useState } from "react";
import "./NotesList.css";
import Note from "../Note/Note";
import { loadNotes } from "./notes_storage";
import AddNote from "../AddNote/AddNote";

export default function NotesList({ notes, onDelete }) {
    return (
        <>
            <ul className="notes-list">
                { notes.map( note => 
                    <Note 
                        key={note.id}
                        id={note.id}
                        content={note.content}
                        onDelete={onDelete}
                    >
                    </Note>
                )}
            </ul>
        </>
        
    );
}