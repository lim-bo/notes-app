import { use, useRef, useState } from "react";
import "./Note.css";

export default function Note({ id, content, onDelete, onEdit }) {
    const [textContent, setTextContent] = useState(content);
    const [isEditing, setEditing] = useState(false);
    const [oldText, setOldText] = useState("");


    const handleDeletion = (event) => {
        event.preventDefault();
        onDelete(id);
    }

    const handleFocus = () => {
        setOldText(textContent);
        setEditing(true);
    }

    const handleBlur = () => {
        setEditing(false);
        if (textContent.trim()) {
            onEdit(id, textContent);
        } else {
            setTextContent(oldText);   
        }
        setOldText("");
    }

    const handleChange = (event) => {
        setTextContent(event.target.value);
    }

    const handlKeyDown = (event) => {
        if (event.key == "Enter") {
            event.preventDefault();
            event.target.blur();
        }
    }

    return (
        <li className="note">
        {
            isEditing ? 
                <textarea
                    id="note-text"
                    className="note__content note__content-editable"
                    value={textContent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handlKeyDown}
                    autoFocus
                >
                </textarea>
            :
                <p 
                    className="note__content"
                    onClick={handleFocus} 
                >
                    {textContent}
                </p>
        }
            
            <button className="note__delete-btn button" onClick={handleDeletion}>Удалить</button>
        </li>
    );
}