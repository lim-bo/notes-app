import { useCallback, useEffect, useState } from "react";
import "./AddNote.css";

export default function AddNote({ onAddNote }) {
    const [content, setContent] = useState("");

    const updateContent = useCallback((event) => {
        setContent(event.target.value);
    });

    const handleAddNote = (event) => {
        event.preventDefault();
        if (!content) {
            return;
        }
        onAddNote(
            {
                content: content
            }
        );
        setContent("");
    }    

    return (
        <form name="add-note-form" className="add-note-form section" onSubmit={handleAddNote}>
            <textarea id="text" value={content} className="text-input" onChange={updateContent}>
            </textarea>
            <button className="add-note-form__add-button button" type="submit">
                Добавить
            </button>
        </form>
    );
}