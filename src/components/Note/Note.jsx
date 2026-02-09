export default function Note({ id, content, onDelete }) {

    const handleDeletion = (event) => {
        event.preventDefault();
        onDelete(id);
    }

    return (
        <li className="note">
            <p className="note__content">
                {content}
            </p>
            <button className="note__delete-btn" onClick={handleDeletion}>Удалить</button>
        </li>
    );
}