const notesKey = "Notes";

export function loadNotes(notes) {
    const items = localStorage.getItem(notesKey);
    if (items === null) {
        return [startNote];
    }
    return JSON.parse(items);
}

export function saveNotes(notes) {
    localStorage.setItem(notesKey, JSON.stringify(notes));
}

const startNote = {
    id: crypto.randomUUID(),
    content: "Быть или не быть"
}