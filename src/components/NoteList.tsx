import React from "react";
import classes from "./NoteList.module.css";
import NoteListItem from "./NoteListItem";
import Note from "../models/Note";

interface NoteListProps {
    noteList: Note[];
    onSelectNote: (id: string) => void
}

const NoteList: React.FC<NoteListProps> = (props) => {
  return (
    <ul className={classes["note-list"]}>
      {props.noteList.map((note) => {
        return (
          <NoteListItem key={note.id} onSelect={props.onSelectNote.bind(null, note.id)} title={note.title} text={note.text} />
        );
      })}
    </ul>
  );
};

export default NoteList;
