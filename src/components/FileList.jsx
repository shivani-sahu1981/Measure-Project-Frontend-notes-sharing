// src/components/FileListPage.jsx

import React from "react";

export default function FileListPage({ notes }) {
    if ( !notes || notes.length === 0) {
        return <p>No notes available yet.</p>;
    }

    return (
        <div className="row">
            {notes.map((notes, index) =>(
                <div key={index} className="col-md-4 mb-3">
                    <div className="card p-3 shadow-sm h-100">
                    <h6 className="text-primary">{notes.batchName}</h6>
                    <p className="mb-1">By: <strong>{notes.educatorName}</strong></p>
                    <p className="text-muted" style={{fontSize:'0.85rem'}}>
                        uploaded:{new Date(note.uploadTime).toLocaleString()}
                    </p>
                    <a 
                    href={note.fileUrl}
                    target="_blank"
                    rel="noreferror"
                    className="btn btn-outline-primary mt-auto"
                    >
                        Download
                    </a>
                    </div>
                    
                </div>
            ))}
        </div>

    );
}