import React, { useState } from 'react'
import classes from './NoteDetail.module.css'
import Note from '../models/Note'

interface NoteDetailProps {
    note: Note
}

const NoteDetail: React.FC<NoteDetailProps> = (props) => {
    
    return (
        <div className={classes['note-detail']}>
            <h1>{props.note.title}</h1>
            <p>{props.note.text}</p>
        </div>
    )
}

export default NoteDetail
