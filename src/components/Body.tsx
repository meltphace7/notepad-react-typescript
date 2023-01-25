import React, {useState} from 'react'
import classes from './Body.module.css'
import Note from '../models/Note'
import NoteList from './NoteList'
import NoteDetail from '../components/NoteDetail'

interface BodyProps {
    noteList: Note[]
}

const Body: React.FC<BodyProps> = (props) => {
    const [currentNote, setCurrentNote] = useState<Note>({id: '', title: '',text: ''})

    const noteSelectHandler = (id: string) => {
        const curNote = props.noteList.find(note => note.id === id);

        if (!curNote) return
        setCurrentNote(curNote);
        console.log("cur note", curNote);
    }


    return (
      <div className={classes.body}>
        <div className={classes["note-list-container"]}>
          <NoteList onSelectNote={noteSelectHandler} noteList={props.noteList} />
        </div>
        <div className={classes["note-detail-container"]}>
          <NoteDetail note={currentNote} />
        </div>
      </div>
    );
}

export default Body
