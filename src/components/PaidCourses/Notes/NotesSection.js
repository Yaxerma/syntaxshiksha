import React from 'react';

const notes = [
    {
        id: 1,
        title: 'C++ Notes',
        content: 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/C_Complete_Notes.pdf',
    },
    {
        id: 2,
        title: 'Java Notes',
        content: 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/Java_Complete_Notes.pdf',
    },
    {
        id: 3,
        title: 'Javascript Notes',
        content: 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/notes/JS_Chapterwise_Notes.pdf',
    },
    {
        id: 4,
        title: 'Python Notes',
        content: 'https://example.com/python-notes.pdf',
    },
    {
        id: 5,
        title: 'PHP Notes',
        content: 'https://example.com/php-notes.pdf',
    },
    {
        id: 6,
        title: 'SQL Notes',
        content: 'https://example.com/sql-notes.pdf',
    },
];

const downloadNote = (note) => {
    const element = document.createElement('a');
    element.href = note.content;
    element.download = `${note.title}.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};

const NotesSection = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px 20px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Notes Section</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
                {notes.map((note) => (
                    <div key={note.id} style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{note.title}</h2>
                        <button
                            onClick={() => downloadNote(note)}
                            style={{ backgroundColor: 'black', color: 'white', padding: '10px 20px', border: '2px solid orange', borderRadius: '5px', marginTop: '10px' }}
                        >
                            Download
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesSection;