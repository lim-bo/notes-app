const notesKey = "Notes";

export function loadNotes(notes) {
    const items = localStorage.getItem(notesKey);
    if (!items) {
        return [];
    }
    return JSON.parse(items);
}

export function saveNotes(notes) {
    localStorage.setItem(notesKey, JSON.stringify(notes));
}