import "./NotesList.css";
import Note from "../Note/Note";

export default function NotesList({ notes, onDelete, onEdit }) {
    return (
        <div className="notes-list-wrap section">
            <ul className="notes-list">
                { notes.map( note => 
                    <Note 
                        key={note.id}
                        id={note.id}
                        content={note.content}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    >
                    </Note>)
                }
            </ul> 
        </div>
    );
}